// refer: https://ace.c9.io/#nav=higlighter
// to see how to renew the highlighter rules

define("ace/mode/gara", [], function(require, exports, module) {
    var oop = require("ace/lib/oop")
    var TextMode = require("ace/mode/text").Mode
    var GaraHighlightRules = require("ace/mode/gara_highlight_rules").GaraHighlightRules
    var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent
    var GaraBehavior = require("ace/behavior/gara").GaraBehavior

    var Mode = function() {
        this.HighlightRules = GaraHighlightRules
        this.$outdent = new MatchingBraceOutdent()
        this.$behaviour = new GaraBehavior()

        this.lineCommentStart = "//"
        this.$quotes = { '"': '"' }

        this.getNextLineIndent = function(state, line, tab) {
            var indent = this.$getIndent(line)
            var tokenizedLine = this.getTokenizer().getLineTokens(line, state)
            var tokens = tokenizedLine.tokens
            var endState = tokenizedLine.state

            if (tokens.length && tokens[tokens.length - 1].type == "comment") {
                return indent
            }

            if (state == "start" || state == "no_regex") {
                var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/)
                if (match) {
                    indent += tab
                }
            }

            return indent
        }

        this.checkOutdent = function(state, line, input) {
            return this.$outdent.checkOutdent(line, input)
        }

        this.autoOutdent = function(state, doc, row) {
            this.$outdent.autoOutdent(doc, row)
        }
    }

    oop.inherits(Mode, TextMode)
    exports.Mode = Mode
})

define("ace/mode/matching_brace_outdent", function(require, exports, module) {
    var Range = require("ace/range").Range
    var MatchingBraceOutdent = function() {
        this.checkOutdent = function(line, input) {
            if (!/^\s+$/.test(line))
                return false

            return /^\s*\}/.test(input)
        }

        this.autoOutdent = function(doc, row) {
            var line = doc.getLine(row)
            var match = line.match(/^(\s*\})/)

            if (!match) return 0

            var column = match[1].length
            var openBracePos = doc.findMatchingBracket({
                row: row,
                column: column
            })

            if (!openBracePos || openBracePos.row == row) return 0

            var indent = this.$getIndent(doc.getLine(openBracePos.row))
            doc.replace(new Range(row, 0, row, column - 1), indent)
        }

        this.$getIndent = function(line) {
            return line.match(/^\s*/)[0]
        }
    }

    exports.MatchingBraceOutdent = MatchingBraceOutdent
})

define("ace/behavior/gara", function(require, exports, module) {
    "use strict"

    var oop = require("ace/lib/oop")
    var Behaviour = require("ace/mode/behaviour").Behaviour
    var lang = require("ace/lib/lang")
    var context
    var contextCache = {}
    var defaultQuotes = {
        '"': '"',
    }

    var initContext = function(editor) {
        var id = -1
        if (editor.multiSelect) {
            id = editor.selection.index
            if (contextCache.rangeCount != editor.multiSelect.rangeCount)
                contextCache = {
                    rangeCount: editor.multiSelect.rangeCount
                }
        }

        if (contextCache[id]) return context = contextCache[id]

        context = contextCache[id] = {
            autoInsertedBrackets: 0,
            autoInsertedRow: -1,
            autoInsertedLineEnd: "",
            maybeInsertedBrackets: 0,
            maybeInsertedRow: -1,
            maybeInsertedLineStart: "",
            maybeInsertedLineEnd: "",
        }
    }

    var getWrapped = function(selection, selected, opening, closing) {
        var rowDiff = selection.end.row - selection.start.row
        return {
            text: opening + selected + closing,
            selection: [
                0,
                selection.start.column + 1,
                rowDiff,
                selection.end.column + (rowDiff ? 0 : 1)
            ]
        }
    }

    var GaraBehavior = function(options) {
        let closingFor = {
            '{': '}',
            '[': ']',
            '<': '>',
            '(': ')'
        }

        this.add("brackets", "insertion", function(state, action, editor, session, text) {
            var cursor = editor.getCursorPosition()
            var line = session.doc.getLine(cursor.row)

            if (text == '{' || text == '[' || text == '<' || text == '(') {
                initContext(editor)
                GaraBehavior.recordMaybeInsert(editor, session, text)
                return {
                    text: text,
                    selection: [1, 1]
                }
            } else if (text == "\n" || text == "\r\n") {
                initContext(editor)
                var closing = ""
                var cleanedText = context.maybeInsertedLineStart.replace(/\s+/g, '').substr(-1)
                let closingChar = closingFor[cleanedText] || ""

                if (GaraBehavior.isMaybeInsertedClosing(cursor, line)) {
                    closing = lang.stringRepeat(closingChar, context.maybeInsertedBrackets)
                    GaraBehavior.clearMaybeInsertedClosing()
                }

                var rightChar = line.substring(cursor.column, cursor.column + 1)
                if (rightChar === closingChar) {
                    var openBracePos = session.findMatchingBracket({
                        row: cursor.row,
                        column: cursor.column + 1
                    }, closingChar)
                    if (!openBracePos)
                        return null
                    var next_indent = this.$getIndent(session.getLine(openBracePos.row))
                } else if (closing) {
                    var next_indent = this.$getIndent(line)
                } else {
                    GaraBehavior.clearMaybeInsertedClosing()
                    return
                }
                var indent = next_indent + session.getTabString()

                return {
                    text: '\n' + indent + '\n' + next_indent + closing,
                    selection: [1, indent.length, 1, indent.length]
                }
            } else {
                GaraBehavior.clearMaybeInsertedClosing()
            }
        })

        this.add("brackets", "deletion", function(state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range)
            if (!range.isMultiLine() && (selected == '{' || selected == '[' || selected == '<')) {
                initContext(editor)
                var line = session.doc.getLine(range.start.row)
                var rightChar = line.substring(range.end.column, range.end.column + 1)
                if (rightChar == '}' || rightChar == ']' || rightChar == '>') {
                    range.end.column++
                    return range
                } else {
                    context.maybeInsertedBrackets--
                }
            }
        })

        this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
            var quotes = session.$mode.$quotes || defaultQuotes
            if (text.length == 1 && quotes[text]) {
                if (this.lineCommentStart && this.lineCommentStart.indexOf(text) != -1)
                    return
                initContext(editor)
                var quote = text
                var selection = editor.getSelectionRange()
                var selected = session.doc.getTextRange(selection)
                if (selected !== "" && (selected.length != 1 || !quotes[selected]) && editor.getWrapBehavioursEnabled()) {
                    return getWrapped(selection, selected, quote, quote)
                } else if (!selected) {
                    var cursor = editor.getCursorPosition()
                    var line = session.doc.getLine(cursor.row)
                    var leftChar = line.substring(cursor.column - 1, cursor.column)
                    var rightChar = line.substring(cursor.column, cursor.column + 1)

                    var token = session.getTokenAt(cursor.row, cursor.column)
                    var rightToken = session.getTokenAt(cursor.row, cursor.column + 1)
                    // We're escaped.
                    if (leftChar == "\\" && token && /escape/.test(token.type))
                        return null

                    var stringBefore = token && /string|escape/.test(token.type)
                    var stringAfter = !rightToken || /string|escape/.test(rightToken.type)

                    var pair
                    if (rightChar == quote) {
                        pair = stringBefore !== stringAfter
                        if (pair && /string\.end/.test(rightToken.type))
                            pair = false
                    } else {
                        if (stringBefore && !stringAfter)
                            return null // wrap string with different quote
                        if (stringBefore && stringAfter)
                            return null // do not pair quotes inside strings
                        var wordRe = session.$mode.tokenRe
                        wordRe.lastIndex = 0
                        var isWordBefore = wordRe.test(leftChar)
                        wordRe.lastIndex = 0
                        var isWordAfter = wordRe.test(leftChar)
                        if (isWordBefore || isWordAfter)
                            return null // before or after alphanumeric
                        if (rightChar && !/[\s,.})\]\\]/.test(rightChar))
                            return null // there is rightChar and it isn't closing
                        var charBefore = line[cursor.column - 2]
                        if (leftChar == quote && (charBefore == quote || wordRe.test(charBefore)))
                            return null
                        pair = true
                    }
                    return {
                        text: pair ? quote + quote : "",
                        selection: [1, 1]
                    }
                }
            }
        })

        this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
            var quotes = session.$mode.$quotes || defaultQuotes

            var selected = session.doc.getTextRange(range)
            if (!range.isMultiLine() && quotes.hasOwnProperty(selected)) {
                initContext(editor)
                var line = session.doc.getLine(range.start.row)
                var rightChar = line.substring(range.start.column + 1, range.start.column + 2)
                if (rightChar == selected) {
                    range.end.column++
                    return range
                }
            }
        })

    }

    GaraBehavior.recordMaybeInsert = function(editor, session, bracket) {
        var cursor = editor.getCursorPosition()
        var line = session.doc.getLine(cursor.row)
        if (!this.isMaybeInsertedClosing(cursor, line))
            context.maybeInsertedBrackets = 0
        context.maybeInsertedRow = cursor.row
        context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket
        context.maybeInsertedLineEnd = line.substr(cursor.column)
        context.maybeInsertedBrackets++
    }

    GaraBehavior.isMaybeInsertedClosing = function(cursor, line) {
        return context.maybeInsertedBrackets > 0 &&
            cursor.row === context.maybeInsertedRow &&
            line.substr(cursor.column) === context.maybeInsertedLineEnd &&
            line.substr(0, cursor.column) == context.maybeInsertedLineStart
    }

    GaraBehavior.clearMaybeInsertedClosing = function() {
        if (context) {
            context.maybeInsertedBrackets = 0
            context.maybeInsertedRow = -1
        }
    }

    oop.inherits(GaraBehavior, Behaviour)

    exports.GaraBehavior = GaraBehavior
})

define("ace/mode/gara_highlight_rules", [], function(
    require,
    exports,
    module
) {
    var oop = require("ace/lib/oop")
    var TextHighlightRules =
        require("ace/mode/text_highlight_rules").TextHighlightRules

    var GaraHighlightRules = function() {
        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used

        this.$rules = {
            start: [{
                include: "#comments"
            }, {
                include: "#keywords"
            }, {
                include: "#numbers"
            }, {
                include: "#strings"
            }, {
                token: "constant.language.nil.gara",
                regex: /\bnil\b(?![?!])/
            }, {
                token: [
                    "punctuation.definition.variable.gara",
                    "variable.other.readwrite.global.pre-defined.gara"
                ],
                regex: /(\$)(!|@|&|`|'|\+|\d+|~|=|\/|\\|,|;|\.|<|>|_|\*|\$|\?|:|"|-[0adFiIlpv])/
            }, {
                token: "support.class.gara",
                regex: /\b[A-Z]\w*(?=(?:(?:\.|::)[A-Za-z]|\[))/
            }, {
                token: "variable.other.constant.gara",
                regex: /\b[_A-Z]\w*\b/
            }],
            "#comments": [{
                token: "punctuation.definition.comment.gara",
                regex: /\/\//,
                push: [{
                    token: "comment.line.double-slash.gara",
                    regex: /$/,
                    next: "pop"
                }, {
                    defaultToken: "comment.line.double-slash.gara"
                }]
            }],
            "#keywords": [{
                token: "keyword.control.gara",
                regex: /\b(?:fn|ada|benar|salah|nil|jika|lain|utus|tuntut|selama|kelas|kelak|itu|ini|coba|tahan|lalu|dari|putus|pribadi|fAnanta|fNaN|sta|punca|lewat|hal|abs|lempar|galur|tetap|usai|modul|sisip|fana)\b/
            }],
            "#strings": [{
                token: "string.quoted.double.gara",
                regex: /"/,
                push: [{
                    token: "string.quoted.double.gara",
                    regex: /"/,
                    next: "pop"
                }, {
                    token: "constant.character.escape.gara",
                    regex: /\\./
                }, {
                    defaultToken: "string.quoted.double.gara"
                }]
            }],
            "#numbers": [{
                token: "constant.numeric.decimal.gara",
                regex: /\b(?:[0-9]+(\.[0-9]+)?)\b/
            }]
        }

        this.normalizeRules()
    }

    GaraHighlightRules.metaData = {
        $schema: "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
        name: "Gara",
        scopeName: "source.gara",
    }

    oop.inherits(GaraHighlightRules, TextHighlightRules)

    exports.GaraHighlightRules = GaraHighlightRules
})
