import SideBar from "./SideBar";
export default function NavBar(props){
    
    return (
        <nav className="bg-dark p-3 text-white">
            <img className="float-start" height='40px' src="https://images.icon-icons.com/196/PNG/128/car_23773.png" alt="" />
            <div className="float-end" >
                <SideBar data={props.data} />
            </div>
        </nav>
    );
}