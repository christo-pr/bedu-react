import { Component } from "react"

import "./../assets/css/ejemplo1.css"
import FocoMercurial from "./../components/sesion2/FocoMercurial"
import FilaFocos from "./../components/sesion2/FilaFocos"

export default class Sesion2 extends Component {
  render() {
    return (
      <div id="techo">
        <FocoMercurial color={"green"} />
        <FilaFocos />
        <FocoMercurial />
      </div>
    )
  }
}
