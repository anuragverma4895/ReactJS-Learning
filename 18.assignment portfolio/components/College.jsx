import { PhotoContext } from "../PhotoContext";
import { useContext } from "react";
import ThemeContext, { dark, light } from "../ThemeContext";
const College=()=>{
    const pic=useContext(PhotoContext);
    const [theme]=useContext(ThemeContext);
    return (
        <section className="p-5 d-flex align-items-center" style={theme?dark.hero:light.hero}>
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