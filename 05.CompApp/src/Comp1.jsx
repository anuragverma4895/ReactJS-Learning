import Comp2 from "./Comp2";
function Comp1(){
  const a=2;
  let b;
  if(a>b){
    b="India";
  }else{
    b="Incapp";
  }
  
  return (
    <>
      <h3>{b}</h3>
      <h3>B={a>b?"India":"Incapp"}</h3>
      <a href="https://www.google.com">Google</a>
      &nbsp;&nbsp;
      <a href="https://www.facebook.com">Facebook</a>
      <a href="https://www.twitter.com">Twitter</a>
      <br />
      <Comp2 />
    </>
  )
}
export default Comp1;