
function DismissibleAlert({title, message, onDismiss}) {
  return (
    <div>
        <h1>{title}</h1>
        <p> {message} </p>
        <button onClick={onDismiss} >dismiss</button>
        </div>
  )
}

export default DismissibleAlert