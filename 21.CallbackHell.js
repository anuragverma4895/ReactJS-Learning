setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);

// setTimeout(() => {
//   console.log("1");
// }, 500);
// setTimeout(() => {
//     console.log("2");
// }, 1000); 
// setTimeout(() => {
//   console.log("3");
// }, 600)