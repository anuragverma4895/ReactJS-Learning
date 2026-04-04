// Without Callback

function greet( name ) {
    console.log("Hi " + name);
    sayBye();
    //sayTata();
}
function sayBye(){
    console.log("Bye");
}
function sayTata(){
    console.log("Tata");
}

greet("Rahul");
greet("Ram");
greet("Ramesh");