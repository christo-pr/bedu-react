import { useState } from "react"

export default function TodoForm(props) {
  const { onAddNewItem } = props
  const [newItem, setNewItem] = useState("")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        onAddNewItem(newItem)
        setNewItem("")
      }}
    >
      <input
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  )
}
