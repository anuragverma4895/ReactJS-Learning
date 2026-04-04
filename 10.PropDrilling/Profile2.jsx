import { DataContext } from "./Context";
import { useContext } from "react";
export default function Profile2(){
    const stu=useContext(DataContext);
    return (
        <span className="bg-primary p-3 text-white rounded">
            Welcome: {stu.name}, Roll:  {stu.roll}
        </span>
    );
}