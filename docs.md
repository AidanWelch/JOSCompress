## Classes

<dl>
<dt><a href="#Schema">Schema</a></dt>
<dd><p>Class which handles the initiation and encoding/decoding of a schema.</p>
</dd>
<dt><a href="#Server">Server</a> ⇐ <code>WebSocket.Server</code></dt>
<dd><p>Class representing a JSON-handling WebSocket server.</p>
</dd>
</dl>

<a name="Schema"></a>

## Schema
Class which handles the initiation and encoding/decoding of a schema.

**Kind**: global class  

* [Schema](#Schema)
    * [new Schema(schema)](#new_Schema_new)
    * [.encode(message, [permissive])](#Schema+encode) ⇒ <code>String</code>

<a name="new_Schema_new"></a>

### new Schema(schema)
Create an instance of the JSONWebSocket.Schema class.


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | The object that acts as a schema. |

<a name="Schema+encode"></a>

### schema.encode(message, [permissive]) ⇒ <code>String</code>
Encode a message with the schema.

**Kind**: instance method of [<code>Schema</code>](#Schema)  
**Returns**: <code>String</code> - A string that has been encoded.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>Object</code> |  | The object message to encode.  All quotation marks(not apostraphes) must be escaped or errors occur. |
| [permissive] | <code>Boolean</code> | <code>false</code> | If true just return the message if it can't be encoded instead of erroring. |

<a name="Server"></a>

## Server ⇐ <code>WebSocket.Server</code>
Class representing a JSON-handling WebSocket server.

**Kind**: global class  
**Extends**: <code>WebSocket.Server</code>  
<a name="new_Server_new"></a>

### new Server(WebSocketServerOptions, encodeSchema, options)
Create an instance of the JSONWebSocket.Server class.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| WebSocketServerOptions | <code>Object</code> |  | The configuration options of a WebSocketServer. |
| encodeSchema | [<code>Schema</code>](#Schema) |  | The Schema used to encode sent messages. |
| options | <code>Object</code> |  | The JWSocket.Server configuation options. |
| [options.decodeIncoming] | <code>Boolean</code> \| [<code>Schema</code>](#Schema) | <code>false</code> | Attempts to establish and decode incoming connections.  If schema is given it uses that instead of that is sent. |
| [options.throwIncoming] | <code>Boolean</code> | <code>false</code> | If decoding incoming message failed pass it to output instead of just ignoring. |
| [options.autoUnescape] | <code>Boolean</code> | <code>true</code> | This will auto-unescape the incoming messages that have quotation marks after decoding. |
| [options.autoEscape] | <code>Boolean</code> | <code>true</code> | This will auto-escape the quotation marks in messages you send. |

