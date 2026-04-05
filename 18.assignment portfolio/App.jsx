import College from "./components/College";
import School from "./components/School";
import Content from "./components/Content";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { PhotoContext } from './PhotoContext'
import pic from './assets/photo.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeContext from "./ThemeContext";
import { useState } from "react";

import './App.css'

function App(){
  const [theme,setTheme]=useState(true);
  return(
    <>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <Header/>
        {/* <BrowserRouter> */}
        <Navbar/>
        <PhotoContext.Provider value={pic}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/school' element={<School/>}/>
            <Route path='/college' element={<College/>}/>
        </Routes>
        </PhotoContext.Provider>
        {/* </BrowserRouter> */}
        <Content/>
      </ThemeContext.Provider>
    </>
  );
}
export default App;