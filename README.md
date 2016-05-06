# poly-next-core
core libraries for poly-next cli and middleware

## CLI

See: [https://github.com/jrmerz/poly-next](https://github.com/jrmerz/poly-next)

## Config

See: [https://github.com/jrmerz/poly-next#config](https://github.com/jrmerz/poly-next#config)


## Middleware

```bash
npm install --save poly-next-core
```

```js
var polyNextCore = require('poly-next-core');
var express = require('express');
var app = express();

var config = {
    // see above
}

app.use(polyNextCore.middleware(config));
app.use(express.static(config.root));

app.listen(config.port);
```