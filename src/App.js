import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "./App.css"
import Sesion1 from "./pages/Sesion1"
import Sesion2 from "./pages/Sesion2"
import { Sesion3 } from "./pages/Sesion3"
import Sesion4 from "./pages/Sesion4"
import Sesion5 from "./pages/Sesion5"
import Session6 from "./pages/Sesion6"

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sesion-6/christofer">Sesion 6</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" render={() => <h2>Inicio</h2>} exact />
          <Route path="/sesion-6/:msg" component={Session6} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
