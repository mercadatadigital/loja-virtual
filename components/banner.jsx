import React from 'react';

import * as S from '../styles/banner';
import Container from './container';

function Banner() {
  return (
    <Container>
      <S.Grid>
        <div className="banner-main banner-card" />
        <div className="banner-double-top banner-card" />
        <div className="banner-double-bottom banner-card" />
        <div className="banner-vertical banner-card" />
      </S.Grid>
    </Container>
  );
}

export default Banner;