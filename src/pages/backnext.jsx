import { NavLink } from "react-router-dom"

/**
 * 
 * @param {{
 * back: string,
 * next: string
 * }} props 
 */
export default function BackNext(props) {
  return (
    <div className="backnext">
      <NavLink to={props.back}>← Back</NavLink>
      <NavLink to={props.next}>Next →</NavLink>
    </div>
  )
}