<a name="Schema"></a>

## Schema
Class which handles the initiation and encoding/decoding of a schema.

**Kind**: global class  

* [Schema](#Schema)
    * [new Schema(schema)](#new_Schema_new)
    * [.encode(message, [permissive])](#Schema+encode) ⇒ <code>String</code>
    * [.decode(message)](#Schema+decode) ⇒ <code>Object</code> \| <code>Array</code>

<a name="new_Schema_new"></a>

### new Schema(schema)
Create an instance of the Schema class.


| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> \| <code>Array</code> | The object that acts as a schema. |

<a name="Schema+encode"></a>

### schema.encode(message, [permissive]) ⇒ <code>String</code>
Encode a message with the schema.

**Kind**: instance method of [<code>Schema</code>](#Schema)  
**Returns**: <code>String</code> - A string that has been encoded.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>Object</code> \| <code>Array</code> |  | The object message, matching the schema, to encode.  All quotation marks(not apostraphes) must be escaped or errors occur. |
| [permissive] | <code>Boolean</code> | <code>false</code> | If true just return the message if it can't be encoded instead of erroring. |

<a name="Schema+decode"></a>

### schema.decode(message) ⇒ <code>Object</code> \| <code>Array</code>
Encode a message with the schema.

**Kind**: instance method of [<code>Schema</code>](#Schema)  
**Returns**: <code>Object</code> \| <code>Array</code> - An object that has been decoded.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | The message string to decode. |

