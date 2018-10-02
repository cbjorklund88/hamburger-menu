import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <input id="hamburger"
        className="hamburger-checkbox"
        type="checkbox" />
        <label for="hamburger" className="hamburger-label">
          <div className="hamburger-bar1"></div>
          <div className="hamburger-bar2"></div>
          <div className="hamburger-bar3"></div>
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
