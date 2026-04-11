let orderPizza = new Promise((rs, rj) => {
    let pizzaAvailable = false; // Simulating pizza availability
    if (pizzaAvailable) {
      rs("Pizza Delivered!");
    } else {
      rj("Out of Stock");
    }
  });
  
  orderPizza
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.log("Error:", err));
// This code creates a promise that simulates a pizza delivery process.
// If the pizza is available, it resolves with a success message.
// If it is out of stock, it rejects with an error message.
// The `.then()` method handles the success case[resolve() invoked], while `.catch()` handles any errors[reject() invoked].
  