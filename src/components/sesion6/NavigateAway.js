import { withRouter } from "react-router-dom"

function NavigateAway(props) {
  return (
    <button onClick={() => props.history.push("/")}>Regresar al inicio</button>
  )
}

export default withRouter(NavigateAway)
