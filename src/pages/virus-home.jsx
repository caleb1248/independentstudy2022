import { NavLink } from "react-router-dom";

export default function VirusHomePage() {
  return (
    <>
      <div className="mainbody">
        <div className="top">
          <h1>How viruses work</h1>
          <br></br><br></br>
          In this section you will learn how viruses work.
          <br></br><br></br>
          <NavLink to="/viruses/1">Start  →</NavLink>
        </div>
      </div>
    </>
  )
}