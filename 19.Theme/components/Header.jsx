import {useState, useContext, useEffect } from "react";
import ThemeContext ,{dark,light} from "../ThemeContext";
import '../App.css'

const Header=()=>{
    const [theme,setTheme]=useContext(ThemeContext);
    
    return(
        <header style={theme?dark:light}>
            <h1>Welcome to Theme Website</h1>
            <button 
            onClick={()=>{
                setTheme(!theme); 
            }}>
                {theme?"Light":"Dark"}
            </button>
      
        </header>
    )
}
export default Header;