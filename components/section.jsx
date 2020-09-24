import React from 'react';

import * as S from '../styles/section';
import Container from './container';

function Section({ title, children }) {
  return (
    <Container>
      <S.Container>
        <h1 className="title">{title}</h1>
      </S.Container>
      {children}
    </Container>
  );
}

export default Section;