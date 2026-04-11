let orderPizza = new Promise((resolve, reject) => {
    let pizzaAvailable = false; // Simulating pizza availability
  
    setTimeout(() => {
      if (pizzaAvailable) {
        resolve("Pizza Delivered!");
      } else {
        reject("Out of Stock");
      }
    }, 2000);
  });
  
  orderPizza
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.log("Error:", err));
// This code creates a promise that simulates a pizza delivery process.
// If the pizza is available, it resolves with a success message after 2 seconds.
// If it is out of stock, it rejects with an error message.
// The `.then()` method handles the success case[resolve() invoked], while `.catch()` handles any errors[reject() invoked].
  