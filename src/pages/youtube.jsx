
/**
 * 
 * @param {{
 * title: string,
 * video: string,
 * next: string
 * }} props 
 */
export default function Youtube(props) {
  return (
    <div className="mainbody">
      <div className="top">
        <h1>{props.title}</h1>
        <iframe src={props.video}></iframe>
      </div>
    </div>
  )
}