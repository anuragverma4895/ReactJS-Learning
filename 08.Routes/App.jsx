import Header from './comps/Header'
import Nav from './comps/Nav'
import Footer from './comps/Footer'
import Section1 from './comps/Section1'
import Section2 from './comps/Section2'
import Section3 from './comps/Section3'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Section1/>}/>
            <Route path='/sec-1' element={<Section1/>}/>
            <Route path='/sec-2' element={<Section2/>}/>
            <Route path='/sec-3' element={<Section3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}
export default App
