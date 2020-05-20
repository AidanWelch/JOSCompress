# JS Object Schema Compression
Optimizes JSON sizes through a schema format.

## Tutorial
### Schema
The first step to using JOSC is to initialize the schema.  The schema must be either an object or an array, the first entry of an array and each property should indicate the type of data contained.  This is not checked, but could cause unforseen errors if you do not.  As of the types are denonted as so:
* **Arrays** are indicate with brackets containing the data type. | **Example**: ```['int']```
* **Objects** are indicated with braces and contain the keys and data types. | **Example**: ```{foobar: 'string'}```
* **Strings, ints, bools, and floats** can be indicated with their names, as a lowercase string. | ```'string', 'int', 'bool', 'float'```
* **Other types** for other types it is recommended you use the string type then pass them through ```JSON.parse()```

You can now initialize the main class of the library with that object/array.  This returns a new ```Schema``` object.

### Encoding
The rest of the usage is very simple.  All you need to do with your new ```Schema``` object is to run the function ```encode``` inputting the object you want to encode, it does not have to match the ```Schema```.  This will return an encoded string to be used how you like.

### Decoding
Simply pass the encoded string to the ```Schema``` objects ```decode``` function.  This string must match the ```Schema```.  It will return the decoded object.

### Example
```js
var JOSC = require('JOSC');
var schema = new JOSC(
  {
    A: "string",
    B: "string",
    C: ["int"],
    D: {
        a: {},
        b: [{c: "float"}]
    },
    E: "float",
    F: "bool"
  }
);

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

//  Encode the object
var encoded_string = schema.encode(object);

// Decode the object
var decoded_object = schema.decode(encoded_string);

// The decoded_object and object should be equal.
```
