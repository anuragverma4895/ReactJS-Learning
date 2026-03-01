export default function App(props){
    return (
        <div>
            <p>Name:{props.stud.name}</p>
            <p>Age:{props.stud.age}</p>
            <p>Course:{props.stud.roll}</p>
            <hr />
        </div>
    );
}