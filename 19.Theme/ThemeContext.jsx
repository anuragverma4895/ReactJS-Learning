import {createContext } from "react";

export const dark ={
    backgroundColor: '#370b0b',
    color: '#ffffff', 
    transition: '0.5s'
};
export const light ={
    backgroundColor:'#c5c5c5',
    color: '#000000',
    transition: '0.5s'
};

const ThemeContext = createContext();

export default ThemeContext