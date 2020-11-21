import { Component } from "react"

export default class LuzMercurial extends Component {
  state = {
    color: "blue"
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color || this.state.color }}
        className="luz-mercurial"
      ></div>
    )
  }
}
