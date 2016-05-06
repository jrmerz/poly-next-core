var config = require('./lib/config');

module.exports = {
    middleware : function(config) {
        return require('./lib/middleware')(config);
    },
    dump : function(config) {
        require('../lib/dump')(config);
    },
    config : config
}