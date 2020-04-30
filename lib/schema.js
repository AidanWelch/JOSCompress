/**
 * Class which handles the initiation and encoding/decoding of a schema.
 * 
 */
class Schema {
    /**
     * Create an instance of the JSONWebSocket.Schema class.
     * 
     * @param {Object} schema The object that acts as a schema.
     */
    constructor(schema){
        this.schema = schema;
    }

    /**
     * Encode a message with the schema.
     * 
     * @param {Object} message The object message to encode.  All quotation marks(not apostraphes) must be escaped or errors occur.
     * @param {Boolean} [permissive=false] If true just return the message if it can't be encoded instead of erroring.
     * @returns {String} A string that has been encoded.
     */
    encode(message, permissive = false){
        var output = "";
        
        function encodeObject(object){

        }

        function encodeArray(array){
            for(let i = 0; i < array.length; i++){
                if(typeof array[i] !== 'object' || array[i] === null){
                    if(typeof array[i] === 'string'){
                        output = output.concat(`"${array[i]}"`);
                    } else {
                        output = output.concat(array[i]);
                    }
                } else if (Array.isArray(array[i])){
                    output = output.concat('[');
                    encodeArray(array[i]);
                    output = output.concat(']');
                } else if (typeof array[i] === 'object'){
                    output = output.concat('{');
                    encodeObject(array[i]);
                    output = output.concat('}');
                } else {
                    throw `Somehow ${array[i]} was unable to be parsed.`;
                }
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
}

module.exports = Schema;