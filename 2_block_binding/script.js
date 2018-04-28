/* constant variables */
const person = {
    name : 'ron'
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