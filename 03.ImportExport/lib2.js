function abc(){
    console.log("Hello Incapp");
}
function xyz(){
    console.log("XYZ fuction");
}
export default abc;
export {xyz}; // This will export 'xyz' as a named export, while 'abc' is the default export.