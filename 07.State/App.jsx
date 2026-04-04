import { useState } from "react";

const App=()=>{
  const [c,setC] = useState(0);
  const [user,setUser] = useState({name:'Ram',age:15});
  const [items, setItems] = useState(["Java ", "Python "]);

  function plus(){
    setC(c+1)
  }
  return(
    <>
      <h1>State Example</h1>
      <p>Counter: {c}</p>
      <button onClick={plus}>+</button>
      <button onClick={()=>{setC(c-1)}}>-</button>
      <hr />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={()=>{setUser({name:'Mohan',age:76})}}>Change</button>
      <button onClick={()=>{setUser({...user,age:25})}}>Change</button>
      <button onClick={()=>{setItems([...items,"React "])}}>Change</button>
      <hr />
      <p>Items: {items}</p>
    </>
  );
}
export default App;
