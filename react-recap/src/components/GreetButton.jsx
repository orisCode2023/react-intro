
function GreetButton(props) {
  return (
    <>
    <label htmlFor=""> {props.name} </label>
    <button onClick={() => alert(`hi ${props.name}`)} >{props.context}</button>
    </>
  )
}

export default GreetButton