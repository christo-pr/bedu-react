import NavigateAway from "../components/sesion6/NavigateAway"

export default function Sesion6(props) {
  return (
    <>
      <h2>Hey: {props.match.params.msg}</h2>
      <NavigateAway />
    </>
  )
}
