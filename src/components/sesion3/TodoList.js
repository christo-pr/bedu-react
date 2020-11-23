export default function TodoList(props) {
  const { items, onRemove } = props

  return (
    <ul>
      {items.map(t => (
        <li key={t}>
          {t} <span onClick={() => onRemove(t)}>&times;</span>
        </li>
      ))}
    </ul>
  )
}
