import { PhotoContext } from "../PhotoContext";
import { useContext } from "react";
const College=()=>{
    const pic=useContext(PhotoContext);
    return (
        <section className="bg-light p-5 d-flex align-items-center">
           <img src={pic} height='128px' alt="" />
           <div className='pt-3 px-3 bg-secondary text-white'>
            <h5>PQR College</h5>
            <p>Degree <b>B.Tech-CS</b></p>
            <p>Marks <b>95%</b></p>
           </div>
        </section>
    );
}
export default College;