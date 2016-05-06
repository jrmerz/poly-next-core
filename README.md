# poly-next-core
core libraries for poly-next cli and middleware

## CLI

See: [https://github.com/jrmerz/poly-next](https://github.com/jrmerz/poly-next)
Or: [https://www.npmjs.com/package/poly-next](https://www.npmjs.com/package/poly-next)

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

## Polyfills

While servePolyfill=true, the webcomponent polyfills will be served from:

- /webcomponentsjs/full.js
- /webcomponentsjs/lite.js
- /webcomponentsjs/micro.js