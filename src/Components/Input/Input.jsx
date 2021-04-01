import React, { Component } from "react";
import { Bundle } from "./Input.magic";
import Light from "../../Upload/RightLight.png";
import Dark from "../../Upload/RightDark.png";

export class Input extends Component {
  render() {
    let { Input, Container, Wrapper } = Bundle;
    let { onChange, search, theme } = this.props;
    return (
      <Container>
        <Wrapper>
          <Input
            onChange={onChange}
            value={search}
            placeholder="Enter Player or Team name here..."
          ></Input>

          <img
            src={theme === "light" ? Light : Dark}
            style={{ width: "35px", marginRight: "5px", cursor: "pointer" }}
            alt="search"
          ></img>
        </Wrapper>
      </Container>
    );
  }
}

export default Input;
