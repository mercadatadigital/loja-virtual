import React from 'react';
import * as S from '../styles/container';

const Container: React.FC = ({ children }) => {
  return (
    <S.Center>
      <S.Box>
        {children}
      </S.Box>
    </S.Center>
  );
}

export default Container;