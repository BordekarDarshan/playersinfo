import styled from "styled-components";

const Container = styled.div`
  width: 260px;
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
  > img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 3px;
  }

  :hover > img {
  }
`;

const Navigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    text-align: center;
    border: 1px solid;
    border-color: ${({ theme }) => theme.badge};
    padding: 3px;
    background-color: ${({ theme }) => theme.badge};
    color: ${({ theme }) => theme.cardColor};
    font-family: "Ranchers", cursive;
    border-radius: 3px;
    letter-spacing: 1.5px;
  }
  > img {
    width: 42px;
  }
`;

export const CardBundle = {
  Container,
  Navigate,
};
