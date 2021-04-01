import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  border: ${({ theme }) => theme.card};
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  caret-color: ${({ theme }) => theme.primary};
  text-indent: 10px;
  letter-spacing: 1.5px;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.card}`};
  margin: 2px;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
`;

export const Bundle = {
  Input,
  Wrapper,
  Container,
};
