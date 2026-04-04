
import { useContext } from "react";
import ThemeContext ,{dark,light} from "../ThemeContext";

const Footer=()=>{
    const [theme]=useContext(ThemeContext);
   
    return(
        <footer style={theme?dark:light}>
            <p>
                 &copy; Right Reserved. Design by Rahul Chauhan[INCAPP].
            </p>
        </footer>
    )
}
export default Footer;