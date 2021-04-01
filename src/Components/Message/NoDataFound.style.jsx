import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  > h4 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.badge};
  }
`;
