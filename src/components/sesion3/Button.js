export default function Button(props) {
  const { counter, onIncrement } = props

  return (
    <div>
      {counter}
      <br />
      <button onClick={onIncrement}>Incrementar contador</button>
    </div>
  )
}
