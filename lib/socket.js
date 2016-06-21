var http = require('http');
var server, io;
var sockets = [];
var htmlImport;

function init(app) {
    server = http.Server(app);
    io = require('socket.io')(server);
    io.on('connection', onConnect);
}

function onConnect(socket) {
    sockets.push(socket);
    
    socket.on('disconnect', () => {
        var index = sockets.indexOf(socket);
        if( index === -1 ) return;
        socket.splice(index, 1);
    });
}

function send(event, data) {
    sockets.forEach((socket) => {
        socket.emit(event, data);
    });
}

function setLib(lib) {
    htmlImport = lib;
}

function getLib() {
    return htmlImport;
}

module.exports = {
    init : init,
    send : send,
    lib : {
        name : '__dev_messages',
        get : getLib,
        set : setLib
    }
}