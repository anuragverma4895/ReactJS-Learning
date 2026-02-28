// import {name} from "./lib.js";
// import {b,add} from "./lib.js";

// console.log(name);
// console.log("Name: "+name);
// console.log(add(78,23));
// console.log(add(name,b));
// // console.log(a); // This will throw an error because 'a' is not imported.
// console.log(b);


// import {name} from "./lib.js";
// import {a,b,add} from "./lib.js";

// console.log(name);
// console.log("Name: "+name);
// console.log(add(78,23));
// console.log(add(name,b));
// console.log(a); // This will not throw an error because 'a' is imported.
// console.log(b);

// import {xyz,b,name,add} from "./lib.js";
// console.log(name);
// console.log(add(xyz,b));
// console.log(add(152,20));

import * as data from "./lib.js"; // This will import everything from lib.js and make it available under the namespace 'lib'.
console.log(data);
console.log(data.name);
console.log(data.add(data.xyz,data.b));
console.log(data.add(152,20));
console.log(data.a); // This will work because 'a' is exported as 'xyz' and we can access it using the namespace.