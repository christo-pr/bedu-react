import { useState } from "react"

export default function MyName() {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [secondLastName, setSecondLastName] = useState("")

  return (
    <div className="card">
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="text"
        value={secondLastName}
        onChange={e => {
          setSecondLastName(e.target.value)
        }}
      />

      <p>Mi Nombre es:</p>
      <p>
        {name}&nbsp;
        {lastName}&nbsp;
        {secondLastName}
      </p>
    </div>
  )
}
