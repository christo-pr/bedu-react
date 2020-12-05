import { useState, useEffect } from "react"

export default function ConditionalRender() {
  const [gender, setGender] = useState("")
  const [genderImg, setGenderImg] = useState("")

  useEffect(() => {
    if (gender === "M") {
      setGenderImg(
        "https://cdn6.f-cdn.com/contestentries/1458359/21383270/5c0fd7001d5ad_thumb900.jpg"
      )
    } else {
      setGenderImg(
        "https://i.pinimg.com/originals/3a/2c/74/3a2c7419810a64807d6006b1e9662514.jpg"
      )
    }
  }, [gender])

  const handleGenderChange = e => {
    setGender(e.target.value)
  }

  return (
    <div>
      <form>
        <label>
          <input
            type="radio"
            value="H"
            name="gender"
            onChange={handleGenderChange}
          />
          Niño
        </label>
        <label>
          <input
            type="radio"
            value="M"
            name="gender"
            onChange={handleGenderChange}
          />
          Niña
        </label>
      </form>
      {gender && <img src={genderImg} width="180" />}
    </div>
  )
}
