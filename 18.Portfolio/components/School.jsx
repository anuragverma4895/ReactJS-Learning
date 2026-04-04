import { PhotoContext } from "../PhotoContext";
import { useContext } from "react";
const School=()=>{
    const pic=useContext(PhotoContext);
    return (
        <section className="bg-light p-5 d-flex align-items-center">
           <img src={pic} height='160px' alt="" />
           <div className='pt-3 px-3 bg-secondary text-white'>
            <h5>Xyz Public School</h5>
            <p>Class 12: Marks <b>85%</b></p>
            <h5>Abc Public School</h5>
            <p>Class 10: Marks <b>95%</b></p>
           </div>
        </section>
    );
}
export default School;