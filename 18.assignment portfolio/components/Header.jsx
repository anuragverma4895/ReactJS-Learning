import { useContext } from "react";
import ThemeContext, { dark, light } from "../ThemeContext"; 

const Header=()=>{
    const [theme,setTheme]=useContext(ThemeContext);
    return (
        <header className="p-5" style={theme?dark.header:light.header}>
            {/* Using Float */}
            {/* <div style={{height:'60px'}}>
                <h1 className="float-start">Your Name</h1>
                <div className="float-end">
                    <button className="btn btn-dark">Dark</button>
                    <button className="btn btn-light">Light</button>
                </div>
            </div> */}

            {/* Using Flex */}
            <div className="d-flex justify-content-between align-items-center">
                <h1>Your Name</h1>
                <div>
                    {/* <button className="btn btn-dark"
                    onClick={()=>{
                        setTheme(true); 
                    }}
                    >Dark</button>
                    <button className="btn btn-light ms-2"
                    onClick={()=>{
                        setTheme(false); 
                    }}
                    >Light</button> */}
                    <button className={`btn ${theme ? 'btn btn-dark' : 'btn btn-light'}`}
                    onClick={()=>{
                        setTheme(!theme); 
                    }}
                    >{theme?'Light':'Dark'}</button>
                </div>
            </div>
            <p>
                Phone: <a className="text-decoration-none" href="tel:9898989898">9898989898</a>
                &nbsp;&nbsp;
                Email: <a className="text-decoration-none" href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
        </header>
    );
}
export default Header;