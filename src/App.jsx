import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/404';
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
      <br/><br/>
        <Router><Routes>
          <Route path="*" element={<NotFound/>}></Route>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/immune" element={<ImmuneHome/>}/>
          <Route path="/immune/1" element={<Youtube title="What is the immune system?" back="/immune" next="/immune/2" video="https://www.youtube.com/embed/d-3Q-FJNpBo"/>}/>
          <Route path="/immune/2" element={<Youtube title="What are the parts of the immune system?" back="/immune/1" next="/immune/3" video="https://www.youtube.com/embed/hQphK0AxcWE"/>}/>
          <Route path="/immune/3" element={<Youtube title="Innate immunity and adaptive immunity" back="/immune/2" next="/immune/4" video="https://www.youtube.com/embed/_taZVyRKHaA"/>}/>
          <Route path="/immune/4" element={<Youtube title="Vaccines" back="/immune/3" next="/immune/5" video="https://www.youtube.com/embed/H4DpWCu-1PE"/>}/>
          <Route path="/immune/5" element={<Youtube title="What can the immune system do and not do to cancer?" back="/immune/4" next="/immune/done" video="https://www.youtube.com/embed/rIEWyAtOgYY"/>}/>
          <Route path="/immune/done" element={
						<>
							<h1>Hooray! You have listened to all the videos!</h1>
							Now test your knowledge using this quiz.
							<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJpGa63qkoEOfk6xqun130krXxUlqlSOFVCiCMn9GOCR1rew/viewform?embedded=true" width="640" height="1578" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
						</>
					}/>
        </Routes></Router>
      </div>
    </>
  )
}

export default App;
