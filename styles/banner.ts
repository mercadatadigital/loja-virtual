import styled from 'styled-components';

const BANNER_HEIGHT = 600;

export const Grid = styled.div`
  height: ${BANNER_HEIGHT}px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr .5fr;

  grid-gap: 10px;
  grid-template-areas:
    "bannermain bannermain bannermain"
    "bannerdoubletop bannerdoublebottom bannervertical";

  div.banner-main{
    grid-area: bannermain;
    background-image: url('/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.banner-double-bottom{
    grid-area: bannerdoublebottom;
    background-color: blue;

    background-image: url('/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.banner-double-top{
    grid-area: bannerdoubletop;
    background-color: blue;

    background-image: url('/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.banner-vertical{
    grid-area: bannervertical;
    background-color: red;
    
    background-image: url('/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  div.banner-card{
    transition: filter .2s;
    cursor: pointer;

    :hover{
      filter: brightness(80%);
    }
  }

  @media(min-width: 768px){
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
    "bannermain bannerdoubletop bannervertical"
    "bannermain bannerdoublebottom bannervertical";
  }
`;
