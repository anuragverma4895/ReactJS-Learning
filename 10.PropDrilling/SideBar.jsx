import Profile from "./Profile";
import Profile2 from "./Profile2";
export default function SideBar(props){
    return (
        <div className="bg-secondary p-4">
            <a className="text-white mx-2" href="">Home</a>
            <Profile  data={props.data} />
            <Profile2/>
        </div>
    );
}