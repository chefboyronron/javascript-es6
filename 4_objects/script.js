// Object es6
var createPerson = function(name, age) {
    return {
        name, age
    }
}
console.log(createPerson('ron', 32));
// example 2
var person = {
    name : 'Ron',
    sayName() {
        console.log(this.name);
    }
}
person.sayName();

// es6 object new methods

// Object.is(compareFrom, compareTo); : comparing not only the typeof the variable but also the value of the variable
if(true){
    let compareOne = -0,
        compareTwo = +0;
    console.log(Object.is(compareOne, compareTwo)); // return true
    console.log( (compareOne === compareTwo) ); // return fals
}

// object cloning
var origObj = {
    a : 4,
    b : 10,
    c : 2,
    d : 1
}
var clone = Object.assign({}, origObj);
console.log(clone);

// sort object
var sortable = [],
    sortedObj = {};
for( let key in clone ) {
    sortable.push([key, clone[key]]);
}
var sorted = sortable.sort(
    (a,b) => a[1] - b[1]
);
console.log(sorted);
for ( let key in sorted) {
    sortedObj[sorted[key][0]] = sorted[key][1];
}
console.log(sortedObj);

// prototype
let human = {
    getGreetings() {
        return "Hello";
    }
}
let dog = {
    getGreetings() {
        return "Woof";
    }
}
let friend = {
    getGreetings() {
        return super.getGreetings() + ", Iam your prototype.";
    }
}
Object.setPrototypeOf(friend, human);
console.log(friend.getGreetings());


/* ====================== 
    dcestructing objects
========================= */
let node = {
    name : 'ron',
    age : 32
}
let {name, age} = node;
// same as
/* 
let name = node.name;
let age = node.age;
*/
console.log(name);
console.log(age);

function myFunction(value) {
    console.log(value);
}
myFunction({name: localName, age: localAge, isValid: localValid = false} = node);
console.log(localName);
console.log(localAge);
console.log(localValid);

let newNode = {
    type : "Identifier",
    name : "John",
    loc : { // <=======
        start : {
            line : 1,
            column : 2
        },
        end : {
            line : 4,
            column : 4
        }
    }
}
// get the line property of the object
// let { loc: { start : { line } } } = newNode;

// get the start property of the object
let { loc: { start } } = newNode; //<======
console.log(start.line);
console.log(start.column);

/* ====================== 
    dcestructing array
========================= */

let colors = ['red', 'green', 'blue', ['violet', 'purple'] ];
let [firstColor, secondColor] = colors;
let [,, thirdColor, [fourthColor, fifthColor] ] = colors;
console.log(firstColor, secondColor, thirdColor, fourthColor, fifthColor);

// swap value
let a = 1,
    b = 2;
[a, b] = [b, a]
console.log(a); // output 2

// giving default value, push property in the array
let food = ["burger"];
let [firstFood, secondFood = "fries"] = food;
console.log(firstFood);
console.log(secondFood);

// rest items
let [restone, ...restColors] = colors;
console.log(restone, restColors);

// concatinate arrays
let arrA = [1,2,3,4];
let arrB = [5,6,7,8];
let arrAB = arrA.concat(arrB);
console.log(arrAB);