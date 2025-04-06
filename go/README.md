# Kompilasi

Karena paket private:

```
$ git config --global url.git@github.com:.insteadOf https://github.com/
$ go env -w GOPRIVATE="github.com/kodegara/*"
```

```
$ GOOS=js GOARCH=wasm go build -o gara.wasm && mv ./gara.wasm ../static/gara.wasm
```
