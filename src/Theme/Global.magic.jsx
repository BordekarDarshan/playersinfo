import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior:smooth;
  box-sizing: border-box;
  }
  body{
    margin:0;
    min-height:100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: background 0.50s linear;
    font-family: "Circularpro book", sans-serif;
    ::-webkit-scrollbar {
    width: .7em;
    }
 
   ::-webkit-scrollbar-thumb {
   background-color: ${({ theme }) => theme.badge};
   outline:${({ theme }) => `1px solid ${theme.badge}`}  ;
  }
  }
`;

export const Cursor = styled.div`
  width: 3rem;
  height: 3rem;
  border: ${({ theme }) => `2px solid ${theme.badge}`};
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  backdrop-filter: grayscale(1);
`;
