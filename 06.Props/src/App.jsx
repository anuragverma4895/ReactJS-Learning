import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
export default function App(props) {
  return (
    <>
      <div>
        <h1>Welcome to {props.name} Props App</h1>
        <p>This is version {props.ver} of the app.</p>
      </div>
      
            <h2>Student details</h2>
      <Comp1 stud={{name:"Anurag",age:20,roll:"B.Tech"}}/>
      <Comp1 stud={{name:"Satyam",age:22,roll:"B.Tech"}}/>
      <br />
      <Comp2 stud={{name:"Anurag",age:20,roll:"B.Tech"}}/>
      <Comp2 stud={{name:"Satyam",age:22,roll:"B.Tech"}}/>
    </>
  );
}
