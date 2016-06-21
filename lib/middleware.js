var path = require('path');
var fs = require('fs');
var moduleStore = require('./moduleStore');
var socket = require('./socket');

var polyfillRegex = /^\/webcomponentsjs\/(full|lite|micro).js$/i;

module.exports = function(config) {
    var config = require('./config')(config);
    
    require('./init');

    return function(req, res, next) {

        for( var i = 0; i < config.modules.length; i++ ) {
            var htmlImportsfile = moduleStore.get(req.path);
            if( htmlImportsfile ) {
                if( req.path.match(/.html$/) ) {
                    res.set('Content-Type', 'text/html');
                } else {
                    res.set('Content-Type', 'application/js');
                }
                res.send(htmlImportsfile);
                return;
            }
        }
        
        if( config.servePolyfill ) {
            if( req.path.match(polyfillRegex) ) {
                res.set('Content-Type', 'application/js');
                var file = path.join(__dirname, '..', 'node_modules', 'webcomponentsjs', req.path.split('/').pop());
                if( !fs.existsSync(file) ) {
                    file = path.join(__dirname, '..', '..', 'webcomponentsjs', req.path.split('/').pop());
                }
                fs.readFile(file, 'utf-8', (err, contents) => {
                    res.send(contents);
                });
                return;
            }
        }
        
        if( config.pushMessage && req.path === `/${socket.lib.name}.html` ) {
            
        }
        
        next();
    }
}

