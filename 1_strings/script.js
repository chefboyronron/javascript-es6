var msg = "Hello World!";

/*================================
    Checking the string content 
==================================*/
console.log( "starts with 'Hello': " + msg.startsWith("Hello") );
console.log( "ends with '!' - " + msg.endsWith("!") );
console.log( "words have 'o' - " + msg.includes("o") );
// Checking the string with offset parameter
console.log( "starts with 'o' with offset of 4 - " + msg.startsWith("o", 4) );
console.log( "ends with 'o' with offset of 8 - " + msg.endsWith("o", 8) );
console.log( "words have 'o' with offset of 8 - " + msg.includes("o", 8) );

/*================================
        Repeating the sting 
==================================*/
console.log( msg.repeat(3) );

/*================================
        Template literals 
==================================*/
// back tics string
var string = `Hello World!`;
console.log( string );
console.log( typeof string );
console.log( string.length );

// multiline string
// note: no blank space in every end of the line
string = "Multiline \
string";
console.log( string );
string = `Multiline with
back tics`;
console.log( string );

// trim - clean the extra blank space in the start and to end of the string
var html = `
    <html>
        <title>ES6 trim</title>
    </html>
`;
console.log( html.trim() );

/*====================================
    Template literals : interpolation 
======================================*/
// inserting variables inside the other variables
var name = 'Ron';
var message = `Hello ${name}`;
console.log(message);

// Mathematics and back tics
var count = 10,
    price = 0.25,
    message = `${count} item cost $${(count * price).toFixed(2)}`;
console.log(message);

// Template strings into another template string
var name = "Ron",
    message = `Hello, 
        ${ `my name is ${name}`
    }.`;
console.log(message);
