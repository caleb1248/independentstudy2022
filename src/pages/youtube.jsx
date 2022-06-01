import BackNext from "./backnext";
/**
 *
 * @param {{
 * title: string,
 * video: string,
 * next: string,
 * back: string
 * }} props
 */
export default function Youtube(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <iframe
        frameBorder="0"
        src={props.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <BackNext back={props.back} next={props.next} />
    </>
  );
}
