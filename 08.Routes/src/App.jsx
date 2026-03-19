import Header from './comps/Header';
import Nav from './comps/Nav';
import Footer from './comps/Footer';

import Section1 from './comps/Section1';
import Section2 from './comps/Section2';
import Section3 from './comps/Section3';

import { browser,Router,touter,Routes,Route, BrowserRouter } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Footer />
    </BrowserRouter>
  )