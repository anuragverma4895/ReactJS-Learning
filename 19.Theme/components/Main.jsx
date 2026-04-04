import { useContext } from "react";
import ThemeContext ,{dark,light} from "../ThemeContext";

const Main=()=>{
    const [theme]=useContext(ThemeContext);
   
    return(
        <main style={theme?dark:light}>
            <h2>This is Main Content.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eligendi magni expedita tempora voluptas recusandae atque repudiandae debitis voluptates neque.</p>
        </main>
    )
}
export default Main;