import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  state = {
    isActive: false
  }
  toggleActive = () => {
    const currentActiveState = this.state.isActive
    this.setState({ isActive: !currentActiveState })
  }

  render() {
    // let hamburgerClass = "hamburger"
    // if(this.state.isActive){
    //   hamburgerClass = "hamburger active"
    // }  "ändra hamburger active to : hamburgerClass"

    return (
      <header>
        <input
          id="hamburger"
          className="hamburger-checkbox"
          type="checkbox" />
        <label htmlFor="hamburger" className="hamburger-label"> //change label input to : "hamburger active", remove className and the input. Also change label to: div className "" onClick={}>
          <div className="hamburger-bar1" />    //add in onClick function {this.toggleActive}
          <div className="hamburger-bar2" />
          <div className="hamburger-bar3" />
        </label>
        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }

}

export default Header
