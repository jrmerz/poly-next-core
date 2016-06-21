var config = require('./lib/config');

module.exports = {
    init : function(app, config) {
        if( config.pushMessages !== false ) {
            require('./lib/socket').init(app);
        }
        app.use(require('./lib/middleware')(config));
    },
    middleware : function(config) {
        return require('./lib/middleware')(config);
    },
    dump : function(config) {
        require('../lib/dump')(config);
    },
    config : config
}