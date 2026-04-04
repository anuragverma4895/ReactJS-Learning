
export default function Profile(props){
    return (
        <span className="bg-primary p-3 text-white rounded">
            Welcome: {props.data.name} , Age: {props.data.age}
        </span>
    );
}