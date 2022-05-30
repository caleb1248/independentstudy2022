import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/404';
import ViruseHomePage from './pages/virus-home';
import B4ubv from './pages/b4ubegin-viruses';
import './app.css';
import './navbar.css';
import Youtube from './pages/youtube';

function App() {
  useEffect(() => {
    window.onresize = () => {
      document.querySelector("div.mainbody").style.marginTop = document.querySelector("nav").clientHeight + "px";
    };
    window.onresize();
    return () => {
      window.onresize = null;
    }
  })
  return (
    <>
      <Router>
        <nav><div className="title">Caleb Liu - Independent Study Project 2022</div></nav>
        <div className="mainbody">
          <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/viruses" element={<ViruseHomePage/>}/>
            <Route path="/viruses/1" element={<B4ubv/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
