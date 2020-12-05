import { useEffect, useState } from "react"

import TodoList from "../components/sesion5/TodoList"
import TodoForm from "../components/sesion5/TodoForm"
import ConditionalRender from "../components/sesion5/ConditionalRender"

export default function Sesion5() {
  const [items, setItems] = useState([])

  const updateItems = item => {
    setItems([...items, item])
  }

  const removeItem = item => {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div className="card">
      {/* <TodoForm onAddNewItem={updateItems} />
      <TodoList items={items} onRemove={removeItem} /> */}
      <ConditionalRender />
    </div>
  )
}
