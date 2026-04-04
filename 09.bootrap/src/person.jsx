// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Person from './person';
// import pic1 from './assets/pic1.jpg';
// import pic2 from './assets/pic2.jpg';

// function App() {
//   return (
//     <h1 className="bg-danger p-5 text-white">
//         Welcome to Bootstrap Demo
//     </h1>
//     <p>
//         This is a simple demo of Bootstrap in React.
//     </p>
//   );
// }

// export default App;


const Person=(props)=>{}
    return(
        <div className="bg-warning p-3">
            <img height="100px" src={props.image} alt="" />
            <p>Name: {props.name}</p>
        </div>
    );

export default Person;