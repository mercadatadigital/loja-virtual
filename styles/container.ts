import styled from 'styled-components';

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;

  @media(min-width: 768px){
    width: 90%;
  }

  @media(min-width: 1024px){
    width: 80%;
  }
`;
