import BackNext from "../backnext";

export default function B4ubi() {
  return (
    <>
      <h1>Before you begin...</h1>
      <p>You need to know what the immune system does in general. The videos that you will watch are explaining each step the immune system takes to get rid of a virus. Here is what the immune system does in general.</p>
      <ol>
        <li>The immune system identifies the virus.</li>
        <li>The immune system provides an initial response to kill the virus</li>
        <li>The immune system makes antibodies that kill the virus.</li>
      </ol>

      <BackNext back="/viruses" next="/immune/2"></BackNext>
    </>
  )
}