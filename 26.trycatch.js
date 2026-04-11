try {
  let result = 10 / 2;
  console.log("Result:", result);
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("This block always executes, regardless of errors.");
} 
// No error, so catch is skipped.

try {
  let result = 10 / 0; // This give infinity, not an error
  console.log("Result:", result);
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("This block always executes, regardless of errors.");
} 


try {
  let result = a + 5; // a is not defined
  console.log("Result:", result);
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("This block always executes, regardless of errors.");
}
// This will catch the error because 'a' is not defined, so it will log the error message.


try {
  let num = x * 2;
} catch (e) {
  console.log("Name:", e.name);
  console.log("Message:", e.message);
  console.log("Stack:", e.stack);
}
// This will catch the error and log the name, message, and stack trace of the error.