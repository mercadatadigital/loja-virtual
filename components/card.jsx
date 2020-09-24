import React from 'react';

import * as S from '../styles/card';

function Card({ image, title, author, price }) {
  return (
    <S.Container >
      <S.Image src={image} />
      <div className="card-info">
        <div className="card-header">
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
        </div>
        <span className="price">{price}</span>
      </div>
    </S.Container>
  );
}

export default Card;