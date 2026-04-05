import { PhotoContext } from "../PhotoContext";
import { useContext } from "react";
import ThemeContext, { dark, light } from "../ThemeContext";
const School=()=>{
    const pic=useContext(PhotoContext);
    const [theme]=useContext(ThemeContext);
    return (
        <section className="p-5 d-flex align-items-center" style={theme?dark.hero:light.hero}>
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