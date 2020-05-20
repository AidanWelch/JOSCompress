const assert = require('assert');
const JSOC = require('../index');

describe('Test of the JSONWebSocket.Schema class', () => {
    const schema = new JSOC({
        A: "string",
        B: "string",
        C: ["int"],
        D: {
            a: {},
            b: [{c: "float"}]
        },
        E: "float",
        F: "bool"
    });
    var object = {
        A: "foobar",
        B: "this will be for escape testing",
        C: [1,2,3],
        D: {
            a: {},
            b: [{c: 4.2}]
        },
        E: 12.312,
        F: true
    };
    var encoded_string = `"foobar","this will be for escape testing",[1,2,3],{{},[{4.2}]},12.312,true`;
    
    describe('encode(object)', () => {
        it('should return the encoded string', () => {
            let result = schema.encode(object)
            assert.equal(result, encoded_string);
        });
    });

    describe('decode(encoded_string)', () => {
        it('should return the decoded object', () => {
            let result = schema.decode(encoded_string);
            assert.deepEqual(result, object);
        });
    });
});