import { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ThemeContext from "./ThemeContext";


function App() {
const [theme,setTheme]=useState(true);
  return (
    <>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}
export default App
