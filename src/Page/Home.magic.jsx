import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 668px) {
    width: 90%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const BundleHome = {
  Container,
  CardWrapper,
};
