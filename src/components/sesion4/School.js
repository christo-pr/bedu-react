import { useState } from "react"

export default function School() {
  const [name, setName] = useState("")
  const [school, setSchool] = useState({
    teachers: 0,
    students: 0
  })

  const updateName = event => {
    const {
      target: { value }
    } = event // e.target.value

    setName(value)
  }

  const updateSchool = k => e => {
    setSchool({ ...school, [k]: e.target.value })
  }

  return (
    <div className="school">
      <input
        type="text"
        placeholder="Nombre de la escuela"
        onChange={updateName}
      />
      <h2>{name}</h2>
      <br />

      <label htmlFor="teachers">Maestros: </label>
      <input
        type="number"
        id="teacher"
        placeholder="maestros"
        onChange={updateSchool("teachers")}
      />
      <p>{school.teachers}</p>
      <br />

      <label htmlFor="students">Estudiantes: </label>
      <input
        type="number"
        id="students"
        placeholder="estudiantes"
        onChange={updateSchool("students")}
      />
      <p>{school.students}</p>
      <br />
    </div>
  )
}
