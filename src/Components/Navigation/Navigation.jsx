import React, { Component } from "react";
import { BundleNavigation } from "./Navigation.magic";
import DarkMode from "../../Upload/DarkMode.png";
import LightMode from "../../Upload/LightMode.png";
import "../../App.css";

export class Navigation extends Component {
  scaleImage = (e) => {
    e.target.classList.add("mouse-over-scale");
  };

  scaleDown = (e) => {
    e.target.classList.remove("mouse-over-scale");
  };

  render() {
    let { changeMode, theme } = this.props;
    let { Container } = BundleNavigation;
    return (
      <Container>
        <img
          src={theme === "light" ? LightMode : DarkMode}
          onClick={() => changeMode()}
          alt="Change Mode"
          ref={this.cursor}
          title="Enable Light/Dark Mode"
          onMouseOver={this.scaleImage}
          onMouseLeave={this.scaleDown}
        ></img>
      </Container>
    );
  }
}

export default Navigation;
