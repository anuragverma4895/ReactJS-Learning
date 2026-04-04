setTimeout(() => {
	console.log("This message appears after 4 seconds");
}, 4000);
// This code sets a timer that will execute the provided function after 4 seconds.

function greet(name) {
    console.log("Hello, " + name);
}
setTimeout(greet, 2000, "Rahul");
// This code sets a timer that will call the `greet` function with the argument "Rahul" after 2 seconds.