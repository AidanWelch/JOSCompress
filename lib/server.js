/**
 * Class representing a JSON-handling WebSocket server.
 * 
 * @extends WebSocket.Server
 */
class Server extends require('ws').Server {
    /**
     * Create an instance of the JSONWebSocket.Server class.
     * 
     * @param {Object} WebSocketServerOptions The configuration options of a WebSocketServer.
     * @param {Object} options The JWSocket.Server configuation options.
     * @param {Boolean} options.decodeIncoming Attempts to establish and decode incoming connections.
     * @param {Boolean} options.throwIncoming If decoding incoming 
     */
    constructor (WebSocketServerOptions, options) {
        super(WebSocketServerOptions);
    }
}

module.exports = Server;