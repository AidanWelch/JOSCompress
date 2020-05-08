/**
 * Class which handles the initiation and encoding/decoding of a schema.
 * 
 */
class Schema {
    /**
     * Create an instance of the JSONWebSocket.Schema class.
     * 
     * @param {Map} schema The object that acts as a schema.
     */
    constructor(schema){
        this.schema = schema;
    }

    /**
     * Encode a message with the schema.
     * 
     * @param {Map} message The object message to encode.  All quotation marks(not apostraphes) must be escaped or errors occur.
     * @param {Boolean} [permissive=false] If true just return the message if it can't be encoded instead of erroring.
     * @returns {String} A string that has been encoded.
     */
    encode(message, permissive = false){
        var output = "";
        
        function encodeProperty(property){
            if(typeof property !== 'object' || property === null){
                if(typeof property === 'string'){
                    output = output.concat(`"${property}"`);
                } else {
                    output = output.concat(property);
                }
            } else if (Array.isArray(property)){
                output = output.concat('[');
                encodeArray(property);
                output = output.concat(']');
            } else if (typeof property === 'object'){
                output = output.concat('{');
                encodeObject(property);
                output = output.concat('}');
            } else {
                throw `Somehow ${property} was unable to be parsed.`;
            }
        }

        function encodeObject(object){
            let i = 0;
            for(let keys in object){
                encodeProperty(object[keys]);
                i++;
                if(i !== Object.keys(object).length){
                    output = output.concat(",");
                }
            }
        }

        function encodeArray(array){
            for(let i = 0; i < array.length; i++){
                encodeProperty(array[i]);
                if(i !== array.length-1){
                    output = output.concat(",");
                }
            }
        }

        if(Array.isArray(message)){
            encodeArray(message);
        } else if (typeof message === 'object' && message !== null) {
            encodeObject(message);
        } else if(permissive) {
            return message;
        } else {
            throw "A non-object and non-array type cannot be encoded unless permissive set to true.";
        }

        return output;
    }

    /**
     * Encode a message with the schema.
     * 
     * @param {String} message The message string to decode.
     * @param {Boolean} [permissive=false] If true just return the message if it can't be decoded instead of erroring.
     * @returns {Object} An object that has been decoded.
     */
    decode(message, permissive = false){
        function extractProperty(property){

        }

        function decodeObject(object){
            
        }

        function decodeArray(array){

        }

        if(Array.isArray(this.schema)){
            return decodeArray(message);
        } else if (typeof message === 'object' && message !== null) {
            return decodeObject(message);
        } else {
            throw "The schema is invalid, it must be an array or object.";
        }
    }
}

module.exports = Schema;