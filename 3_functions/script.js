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