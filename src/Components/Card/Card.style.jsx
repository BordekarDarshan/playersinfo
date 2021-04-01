import styled from "styled-components";

const Container = styled.div`
  width: 45%;
  margin: 15px 8px;
  border-radius: 6px;
  padding: 15px;
  box-sizing: border-box;
  animation-name: item;
  animation-duration: 0.4s;
  animation-fill-mode: backwards;
  box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
  transition: box-shadow 0.3s;
  background-color: ${({ theme }) => theme.background};
  cursor: pointer;
  display: flex;

  @media screen and (max-width: 1068px) {
    width: 60%;
  }
  @media screen and (max-width: 968px) {
    width: 70%;
  }
  @media screen and (max-width: 568px) {
    width: 92%;
  }
`;

const Navigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  > span {
    text-align: center;
    padding: 3px;
    color: ${({ theme }) => theme.primary};
    font-family: "Ranchers", sans-serif;
    letter-spacing: 1.5px;
  }
  > img {
    width: 42px;
  }
`;

const FirstSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  > div[class="avtar"] {
    max-width: 90%;
    > img {
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 50%;
    }
  }

  > span {
    text-align: center;
    letter-spacing: 1px;
  }
`;

export const CardBundle = {
  Container,
  Navigate,
  FirstSection,
};
