import { NavLink } from "react-router-dom";
import BackNext from "./backnext";

export default function b4ubv() {
  return (
    <>
      <h1>Before you begin...</h1>
      <p>You need to know what a virus does in general. The videos that you will watch are explaining each step a virus takes to spread through the body. Here is what a virus does in general.</p>
      <ol>
        <li>A virus gets into a cell</li>
        <li>The virus makes the cell to start making copies of the virus</li>
        <li>The new viruses kill and exit the cell</li>
      </ol>
      <BackNext back="/viruses" next="/viruses/2"></BackNext>
    </>
  )
}