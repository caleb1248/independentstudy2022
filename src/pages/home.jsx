import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="mainbody">
      <div className="top">
        <h1>Hello!</h1>
        <p>
          This is my independent study project on how viruses, the immune system, and vaccines work.
        </p>
        <div id="homepage-link-container">
          <NavLink to="/viruses">How viruses work</NavLink>
          <NavLink to="/immune">How the immune system works</NavLink>
          <NavLink to="/vaxx">How vaccines work</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home