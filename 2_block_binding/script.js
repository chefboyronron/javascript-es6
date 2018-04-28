/* constant variables */
const person = {
    name : 'ronnn'
}

function changeName() {
    // error
    person = {
        name : 'kyle'
    }
    console.log(person.name);
}
// Since constant variable cannot be change the function call outputs an error
// changeName();

/* let vs var */

// the scope of var variable name is available all over the script
// while scope of let variable fiend is available only inside the function
var name = 'Ron';
function getName() {
    let friend = 'Kyle';
    console.log(friend);
}
getName();
// error: undefined variable friend
// console.log(friend);

/* ===============================
    Let and constant in a loop
==================================*/

for(var a = 0; a < 10; a++ ) {
    // console.log(i);
}
// variable "a" is available outside the loop
console.log(a);

for(let b = 0; b < 10; b++ ) {
    // let variable "b" is only available inside this block
}
// variable "b" is not available outside the loop
// output an error!
//console.log(b);

/* functions inside the loop */
funcs = [];
for (var c = 0; c < 10; c++) {
    funcs.push(
        function(loopVal){
            return function() {
                console.log(loopVal);
            }
        }(c)
    );
}
// display the loop value of c where 0 to 9
funcs.forEach(function(func) {
    func();
});

/* function inside the loop : object */
var container = [];
var members = {
    a : {
        name : 'ron'
    },
    b : {
        name : 'kyle'
    },
    c : {
        name : 'ryle'
    }
}
// note you can use const to loop an object
for ( let key in members ) {
    container.push(
        function() {
            console.log(members[key].name);
        }
    );
}
container.forEach(function(f){
    f();
});