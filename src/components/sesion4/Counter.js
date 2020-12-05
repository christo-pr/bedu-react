const Counter = props => {
  const { value: count, onIncrement } = props

  return (
    <div className="counter">
      <p>counter: {count}</p>
      <button onClick={onIncrement}>Mas</button>
    </div>
  )
}

export default Counter
