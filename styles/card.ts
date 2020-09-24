import styled from 'styled-components';

const CARD_WIDTH = 280;
const CARD_HEIGHT = 340;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  cursor: pointer;

  overflow: hidden;

  div.card-info{
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    flex: 1;
    padding: 10px;

    background-color: #F8F8F8;

    h2.title{
    color: rgba(0, 0, 0, .8);
    }

    p.author{
      color: rgba(0, 0, 0, .4);
      font-size: 16px;
    }

    span.price{
      align-self: flex-end;
      justify-self: flex-end;

      font-size: 1.7em;
      color: #2ecc71;
    }
  }

  :hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 160px;

  background-color: blue;

  background-image: url(${({ src }) => src});
  background-size: cover;
`; 
