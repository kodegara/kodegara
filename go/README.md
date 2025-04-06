# Kompilasi

Karena paket private:

```
$ git config --global url.git@github.com:.insteadOf https://github.com/
$ go env -w GOPRIVATE="github.com/kodegara/*"
```

```
$ GOOS=js GOARCH=wasm go build -o gara.wasm && mv ./gara.wasm ../static/gara.wasm
```

Get the wasm exec:

```
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```

And copy it to `static/editor` so that we have the same executor that can execute the compiled wasm object.
