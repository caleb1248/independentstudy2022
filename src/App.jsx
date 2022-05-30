import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/404';
import ViruseHomePage from './pages/virus-home';
import './app.css';
import './navbar.css';
import Youtube from './pages/youtube';

function App() {
  return (
    <>
      <Router>
        <nav><div className="title">Caleb Liu - Independent Study Project 2022</div></nav>
        <Routes>
          <Route path="*" element={<NotFound/>}></Route>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/viruses" element={<ViruseHomePage/>}/>
          <Route path="/viruses/1" element={<Youtube title="How do viruses get into a cell" video="http://localhost:3000"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
