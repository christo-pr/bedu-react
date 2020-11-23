export default function TodoForm(props) {
  const { inputValue, onChangeInputValue, onSubmit } = props

  return (
    <>
      <input type="text" value={inputValue} onChange={onChangeInputValue} />
      <button type="button" onClick={onSubmit}>
        Agregar
      </button>
    </>
  )
}
