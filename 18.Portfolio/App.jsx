import College from "./components/College";
import School from "./components/School";
import Content from "./components/Content";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { PhotoContext } from './PhotoContext'
import pic from './assets/photo.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(){

  return(
    <>
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
    </>
  );
}
export default App;