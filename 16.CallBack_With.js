//With Callback
function greet( name ,callback ) {
    console.log("Hi " + name);
    callback();
}
function sayBye(){
    console.log("Bye");
}
function sayTata(){
    console.log("Tata");
}

greet("Rahul",sayBye);
greet("Ram",sayTata);
greet("Ramesh",sayBye);
  