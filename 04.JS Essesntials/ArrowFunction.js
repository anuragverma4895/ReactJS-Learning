()=>{} // syntax for arrow function, it is an anonymous function, it does not have its own 'this' keyword, it inherits 'this' from the parent scope. It is also called a lambda function in other programming languages. It is a shorter syntax for writing functions in JavaScript.

// Example of arrow function
// const add = (a, b) => {
//     return a + b;
// }

// // Example of arrow function with implicit return
// const multiply = (a, b) => a * b;

// // Example of arrow function with no parameters
// const greet = () => console.log("Hello, World!");

// Example of arrow function with one parameter
function sqr(a){
    console.log("Normal function!");
    return a * a;
}

const square =(a) => {
    console.log("Arrow function!");
    return a * a;
};
console.log("Square: " + square(7));
console.log("Square: " + square(9));