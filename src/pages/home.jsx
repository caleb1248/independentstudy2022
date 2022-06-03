import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="mainbody">
      <div className="top">
        <h1>Hello!</h1>
        <p>
          This is my independent study project on how the immune system works.
        </p>
        <div id="homepage-link-container">
          <NavLink to="/immune">How the immune system works</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home