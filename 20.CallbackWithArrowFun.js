//With Callback with arrow function
function greet( name ,callback ) {
    console.log("Hi " + name);
    callback();
}

greet("Rahul",()=>{
    console.log("Bye");
});
greet("Ram",()=>{
    console.log("Tata");
});
greet("Ramesh",()=>{
    console.log("Bye");
});
  