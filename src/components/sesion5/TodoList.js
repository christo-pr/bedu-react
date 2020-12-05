export default function TodoList(props) {
  const { items, onRemove } = props

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item} <span onClick={() => onRemove(item)}>&times;</span>
        </li>
      ))}
    </ul>
  )
}
