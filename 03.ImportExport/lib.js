export let name="Anurag";
const a=10,b=20;
function add(x,y){
    return x+y;
}
// export {a,b, add };
export {a as xyz,b, add}; // This will export 'a' with the name 'xyz'.