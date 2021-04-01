import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 3px;
`;

const Vl = styled.div`
  margin: 0.1px auto;
  width: 5px;
  height: 100px;
  position: relative;
  text-align: center;
  :after {
    height: 100px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: ${({ theme }) => `2px solid ${theme.badge}`};
    transform: translate(-50%);
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>Player Info</Wrapper>
      <Vl />
    </Container>
  );
}

export default Footer;
