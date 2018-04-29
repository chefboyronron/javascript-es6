// default ES6 function
function makeRequest( url = '', timeout = 3000, callback = function() {} ) {
    console.log(url);
    console.log(timeout);
    console.log(callback);
}
var tbl_members = ['Ron', 'Kyle', 'Ryle', 'Nikki'];
var callbacks = {
    get : function(table){
        var m = {};
        for ( let name in table){
            m[name] = table[name];
        }
        return m;
    }
}
makeRequest('/members', 1000, callbacks.get(tbl_members));

// using of strict in the function
function mixArguments(first, second) {
    "use strict";
    console.log(arguments.length);
    console.log(first === arguments[0]); // true
    console.log(second === arguments[1]); // true
    // because of "use strict" the value of the arguments cannot be change
    first = 300;
    second = 400;
    console.log(first === arguments[0]); // false
    console.log(second === arguments[1]); // false
}
mixArguments(100, 200);

// rest parameters
function add(...myArgs){
    var sum = 0;
    for(let i=0; i < myArgs.length; i++) {
        sum = (sum + myArgs[i]);
    }
    return sum;
}
var sum = add(30,9,50,8);
console.log(sum);

// more rest parameters
function multiply(multiplier = 1, ...myArgs) {
    let table = [];
    myArgs.map(function(curValue, index, array){
        table.push(multiplier * curValue);
    });
    return table;
}
var products = multiply(10,1,2,4,6,8,10);
console.log(products);

// sorting rest parameters
function sortRestArgs(...myArgs){
    let sortedArgs = myArgs.sort(function(a, b){
        // accending
            return a-b;
        // decending
        //  return b-a;
    });
    return sortedArgs;
}
console.log(sortRestArgs(7,1,8,2,5,3,0));

// skip counting function
function skipCount(multiplier = 1) {
    let table = [];
    for(let i=1; i<=10; i++){
        table.push(multiplier * i);
    }
    return table;
}
var result = skipCount(3);
console.log(result);

// Spread parameters
let array20 = [20, 30, 40, 50];
console.log(Math.max(...array20));

// add elements to array using spread params
let parts  = ['shoulder', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

// add an element to array
let new_lyrics = [...lyrics];
new_lyrics.push('new element');
console.log(lyrics, new_lyrics);

// concatenation an array either of two output the same value
//let concatArray = parts.concat(array20);
let concatArray = [...parts, ...array20];
console.log(concatArray);

// meta property
function Person(name) {
    //if( this instanceof Person ) {
    if( typeof new.target !== 'undefined' ) {
        this.name = name;
    } else {
        throw new Error('Must have new keyword in front of the person');
    }
}
var newPerson = new Person('Ron');
console.log(newPerson);
/* var anotherPerson = Person( 'Kyle' );
console.log(anotherPerson); */

// block level function
// "use strict";
if(true) {
    function blockFunc() {
        console.log('blockFunc');
    }
}

// arrow function with one parameter
var reflect = function(value) {
    return value;
}
// arrow equivalent
// var reflect = value => value;

// arrow function with multiple parameters
var isum = function (num1, num2) {
    return num1 + num2;
}
// arrow equivalent
// var isum = (num1, num2) => num1 + num2;

// arrow function with no parameter
var getName = function() {
    return 'Ron';
}
// arrow equivalent
// var getName = () => "Ron";

// arrow function with validation
var validate = function(num1, num2) {
    if( typeof num1 === 'number' && typeof num2 === 'number' ){
        console.log(typeof num1);
    }
}
// arrow equivalent
/* var validate = (num1, num2) => {
    if( typeof num1 === 'number' && typeof num2 === 'number' ){
        console.log(typeof num1);
    }
} */

// arrow function return an object
/* var objFunction = function(id){
    return {
        'id' : id,
        'location' : 'Temp'
    }
} */
// arrow equivalent
// var objFunction = (id) => ({tempId: id, location: 'Temp'});

// Example
var myArrowObj = {
    name : 'Ron',
    age : 32
};
var objFunction = (name) => {
    myArrowObj.name = name;
    return myArrowObj;
};
console.log(objFunction('Kyle'));

// arrow function sorting
var arrowNums = [5,31,76,9,0,30];
var arrowSortAsc = arrowNums.sort( (n1, n2) => n1 - n2 );
console.log(arrowSortAsc);

// arrow function with no argument and passing parameters :(
var noArgument = function() {
    return () => arguments
}
var noArgumentCall = noArgument('ron','gerald');
console.log(noArgumentCall());

// arrow function with IIFE's (immediately invoked function expressions)
let iifePerson = ((name) => {
    return {
        getTheName : function() {
            return name;
        }
    }
})(name);

console.log(iifePerson.getTheName('Ron'));