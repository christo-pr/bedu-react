import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Drawer } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const toogleDrawer = () => {
    setOpen(old => !old)
  }

  return (
    <>
      <Button onClick={toogleDrawer}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={open} onClose={toogleDrawer}>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sesion-1/">Sesion 1</Link>
            </li>
            <li>
              <Link to="/sesion-2/">Sesion 2</Link>
            </li>
            <li>
              <Link to="/sesion-3/">Sesion 3</Link>
            </li>
            <li>
              <Link to="/sesion-4/">Sesion 4</Link>
            </li>
            <li>
              <Link to="/sesion-5/">Sesion 5</Link>
            </li>
            <li>
              <Link to="/sesion-6/testing">Sesion 6</Link>
            </li>
            <li>
              <Link to="/sesion-7">Sesion 7</Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>
  )
}
