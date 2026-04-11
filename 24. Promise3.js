function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is not positive");
    }
  });
}

//Caller
checkNumber(-9)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });