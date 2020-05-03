const assert = require('assert');
const JWSocket = require('../index');

describe('Test of the JSONWebSocket.Schema class', () => {
    const schema = new JWSocket.Schema({test: "schema"});
    var object = {
        A: "foobar",
        B: "this will be for escape testing",
        C: [1,2,3],
        D: {
            a: {},
            b: []
        },
        E:12312
    };
    describe('encode(object)', () => {
        it('should return the encoded string', () => {
            let result = schema.encode(object)
            console.log(result);
            assert.equal(result, `"foobar","this will be for escape testing",[1,2,3],{{},[]},12312`);
        })
    })
});