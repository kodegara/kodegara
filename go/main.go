package main

import (
	"github.com/kodegara/gara/interpreter"
	"syscall/js" // https://pkg.go.dev/syscall/js#pkg-constants
)

var outputted []string

func run(_ js.Value, args []js.Value) interface{} {
	inter := interpreter.NewInterpreter()
	inter.SetPrintingFn(func(str string) {
		outputted = append(outputted, str)
	})

	evaled := inter.Interpret(args[0].String())
	return js.ValueOf(evaled.StringVal())
}

func flush(_ js.Value, args []js.Value) interface{} {
	var jsStr []interface{}

	for _, outStr := range outputted {
		jsStr = append(jsStr, js.ValueOf(outStr))
	}

	outputted = nil
	return js.ValueOf(jsStr)
}

func main() {
	c := make(chan struct{}, 0)

	js.Global().Set("__gara_eval", js.FuncOf(run))
	js.Global().Set("__gara_flush", js.FuncOf(flush))

	<-c
}
