import React from "react";
import { Container, Wrapper } from "./NoDataFound.style";
import LogoLight from "../../Upload/LogoLight.png";
import LogoDark from "../../Upload/LogoDark.png";

function NoDataFound({ theme, onlyLogo }) {
  return (
    <Container>
      <Wrapper>
        <img
          src={theme === "light" ? LogoLight : LogoDark}
          alt="No Data Found"
        ></img>
        {!onlyLogo && <h4>No Data Found</h4>}
      </Wrapper>
    </Container>
  );
}

export default NoDataFound;
