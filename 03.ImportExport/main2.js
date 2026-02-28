import abc from "./lib2.js";
// import A from "./lib2.js"; // This will also work because 'abc' is the default export and can be imported with any name.
// import {xyz} from "./lib2.js"; // This will import the named export 'xyz' from lib2.js.
import A,{xyz} from "./lib2.js"; // This will import the default export as 'z' and the named export 'xyz' from lib2.js.

abc();
A();
xyz();