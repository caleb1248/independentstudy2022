import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/404';
import ViruseHomePage from './pages/viruses/home';
import B4ubv from './pages/viruses/b4ubegin-viruses';
import B4ubi from './pages/immune/b4ubi';
import './app.scss';
import './navbar.css';
import Youtube from './pages/youtube';
import ImmuneHome from './pages/immune/home';

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
      <nav><div className="title">Caleb Liu - Independent Study Project 2022</div></nav>
      <div className="mainbody">
        <Router><Routes>
          <Route path="*" element={<NotFound/>}></Route>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/viruses" element={<ViruseHomePage/>}/>
          <Route path="/viruses/1" element={<B4ubv/>}/>
          <Route path="/viruses/2" element={<Youtube title="How does a virus get into a cell?" back="/viruses/1" next="/viruses/3" video="https://www.youtube.com/embed/REN-jdcK29A"/>}/>
          <Route path="/immune" element={<ImmuneHome/>}/>
          <Route path="/immune/1" element={<B4ubi/>}/>
          <Route path="/immune/2" element={<Youtube title="How does the immune system identify a virus?" back="/immune/1" next="/immune/3" video="https://www.youtube.com/embed/REN-jdcK29A"/>}/>
        </Routes></Router>
      </div>
    </>
  )
}

export default App;
