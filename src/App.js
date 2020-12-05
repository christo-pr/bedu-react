import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "@material-ui/core"

import Nav from "./components/sesion7/Nav"

import "./App.css"
import Sesion1 from "./pages/Sesion1"
import Sesion2 from "./pages/Sesion2"
import { Sesion3 } from "./pages/Sesion3"
import Sesion4 from "./pages/Sesion4"
import Sesion5 from "./pages/Sesion5"
import Sesion6 from "./pages/Sesion6"
import Sesion7 from "./pages/Sesion7"

function App(props) {
  return (
    <Router>
      <Nav />
      <Container>
        <Switch>
          <Route path="/" render={() => <h2>Inicio</h2>} exact />
          <Route path="/sesion-1" component={Sesion1} />
          <Route path="/sesion-2" component={Sesion2} />
          <Route path="/sesion-3" component={Sesion3} />
          <Route path="/sesion-4" component={Sesion4} />
          <Route path="/sesion-5" component={Sesion5} />
          <Route path="/sesion-6/:msg" component={Sesion6} />
          <Route path="/sesion-7" component={Sesion7} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
