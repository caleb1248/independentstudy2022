import { useEffect } from "react";
import { NavLink } from "react-router-dom"

export default function NotFound() {
  useEffect(() => {
    document.title = "404 page not found"
  }, [])
  return (
    <div className="mainbody">
      <div className="top">
        <h1>
          Oops!
        </h1>
        Looks like the page you were looking for does not exist.
        <br/>
        <br></br>
        <div id="homepage-link-container">
          <NavLink to="/">Go back to the home page</NavLink>
          <a href="javascript:history.back()" onClick={history.back}>Go back to where you last were</a>
        </div>
      </div>
    </div>
  )
}