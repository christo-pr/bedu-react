import PropTypes from "prop-types"
import LuzMercurial from "./LuzMercurial"

const FocoMercurial = props => {
  return (
    <div className="foco-mercurial">
      <LuzMercurial color={props.color} />
    </div>
  )
}

FocoMercurial.propTypes = {
  color: PropTypes.string.isRequired
}

FocoMercurial.defaultProps = {
  color: "black"
}

export default FocoMercurial
