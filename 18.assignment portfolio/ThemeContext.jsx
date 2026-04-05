import {createContext } from "react";

export const dark ={
    header:{
        backgroundColor: '#06558d',
        color: '#ffffff'
    },
    nav:{
        backgroundColor: '#2d2c2c',
        color: '#ffffff'
    },
    hero:{
        backgroundColor: '#ffffff',
        color: '#222222'
    },
    content:{
        backgroundColor: '#5a5a5a',
        color: '#ffffff'
    }
};
export const light ={
    header:{
        backgroundColor: '#043a43',
        color: '#ffffff'
    },
    nav:{
        backgroundColor: '#07517c',
        color: '#d9d9d9'
    },
    hero:{
        backgroundColor: '#067d35',
        color: '#d1d1d1'
    },
    content:{
        backgroundColor: '#131313',
        color: '#ffffff'
    }
};

const ThemeContext = createContext();

export default ThemeContext