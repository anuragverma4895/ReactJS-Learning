import { useContext } from "react";
import ThemeContext, { dark, light } from "../ThemeContext";

const Content=()=>{
    const [theme]=useContext(ThemeContext);
    return (
        <section className="p-3" style={theme?dark.content:light.content}>
            <p>
                My Profile Links: 
                <a className="text-white text-decoration-none mx-3" href="https://www.github.com">Github</a>
                <a className="text-white text-decoration-none" href="https://www.linkedin.com">LinkedIn</a>
            </p>
        </section>
    );
}
export default Content;