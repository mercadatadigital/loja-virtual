import styled from 'styled-components';

const HEADER_SIZE = 120;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.primary.main};
`;

export const Container = styled.div`
  height: ${HEADER_SIZE}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px){
    padding: 0 10px 0 10px;
  }

  img.logo{
    height: ${HEADER_SIZE * .8}px;
    cursor: pointer;
  }

  div.phone{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 10px 0 10px;

    display: none;

    @media(min-width: 768px){
      display: block;
    }
  }

  div.phone > span{
    color: white;
    text-transform: uppercase;
    font-weight: lighter;
  }

  div.phone > p{
    color: white;
    font-weight: bold;
  }

  input.search{
    background-color: white;
    border: 0;
    border-radius: 0;
    flex: 1;

    font-size: 1.2em;
    
    :focus{
      color: ${({theme}) => theme.primary.dark};
      background-color: #E8E8E8;
    }

    outline: none;
    padding: 0 10px 0 10px;
  }

  button.menu-button{
    width: 40px;
    border: 0;
    border-radius: 0;
    background-color: white;
    cursor: pointer;

    color: ${({theme}) => theme.primary.main};

    transition: background-color .2s, color .2s;

    :hover{
      background-color: #E8E8E8;
      color: ${({theme}) => theme.primary.dark};
    }
  }

  button.hamburguer{
    font-size: 18px;

    @media(min-width: 768px){
      display: none;
    }
  }

  form.search{
    display: flex;
    height: 40px;
    flex: 1;
  }
`;

export const Menu = styled.div`
  div.menu{
    position: absolute;
    top: 0;
    left: 0;

    width: 200px;
    height: 100%;

    background-color: white;

    display: ${({opened}) => opened ? 'flex' : 'none'};
    flex-direction: column;
  }

  div.menu-item{
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 10px;
    height: 60px;
    background-color: white;

    color: rgba(0, 0, 0, .8);
    font-weight: bold;

    transition: filter .2s;

    :hover{
      filter: brightness(80%);
    }
  }

  div.menu-item.selected{
    background-color: ${({ theme }) => theme.primary.light};
    color: white;
  }

  div.overlay{
    display: ${({opened}) => opened ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .6);
  }

  @media(min-width: 768px){
    div.menu{
      display: flex;
      flex-direction: row;
      position: relative;
      width: auto;
      margin-left: 10px;
      background-color: transparent;
    }

    div.menu-item{
      padding: 10px;
      height: auto;
      background-color: transparent;
      color: white;

      font-weight: 600;

      transition: background-color .2s;

      :hover{
        background-color: rgba(0, 0, 0, .3);
      }
    }

    div.menu-item.selected{
      background-color: ${({ theme }) => theme.primary.light};
      color: white;
    }

    div.mobile-item{
      display: none;
    }
  }
`;