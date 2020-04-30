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
     * @param {Schema} encodeSchema The Schema used to encode sent messages.
     * @param {Object} options The JWSocket.Server configuation options.
     * @param {Boolean|Schema} [options.decodeIncoming=false] Attempts to establish and decode incoming connections.  If schema is given it uses that instead of that is sent.
     * @param {Boolean} [options.throwIncoming=false] If decoding incoming message failed pass it to output instead of just ignoring.
     * @param {Boolean} [options.autoUnescape=true] This will auto-unescape the incoming messages that have quotation marks after decoding.
     * @param {Boolean} [options.autoEscape=true] This will auto-escape the quotation marks in messages you send.
     */
    constructor (WebSocketServerOptions, options = {decodeIncoming: false, throwIncoming: false, autoUnescape: true, autoEscape: true}) {
        super(WebSocketServerOptions);
        this.options = options;
    }
}

module.exports = Server;