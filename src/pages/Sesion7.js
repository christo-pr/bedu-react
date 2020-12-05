import { useState } from "react"
import { Button, Grid, CircularProgress, Dialog } from "@material-ui/core"

export default function Sesion7() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <h2>Material UI</h2>
      <Grid>
        <Grid item>
          <CircularProgress />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenModal(true)}
          >
            Abrir modal
          </Button>
          <Dialog onClose={() => setOpenModal(false)} open={openModal}>
            testing
          </Dialog>
        </Grid>
      </Grid>
    </>
  )
}
