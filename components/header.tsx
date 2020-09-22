import React, { useState } from 'react';

import Container from './container';
import * as S from '../styles/header';

import { FaSearch } from 'react-icons/fa';
import { MdMenu, MdHome, MdShoppingCart, MdSchool } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Header: React.FC = () => {
  const [ opened, setOpened ] = useState(false);

  const open = () => {
    setOpened(true);
  }

  const close = () => {
    setOpened(false);
  }

  return (
    <S.Background>
      <Container>
        <S.Container>
          <img className="logo" src={"/logo.png"} onClick={() => {}} />
          <div className="phone">
            <span>Central Whats</span>
            <p>(21) 98258-6745</p>
          </div>
          <form className="search">
            <button className="menu-button hamburguer" type='button' onClick={open}>
              <MdMenu />
            </button>
            <input className="search" />
            <button className="menu-button">
              <FaSearch />
            </button>
          </form>
          <S.Menu opened={opened}>
            <div className="overlay" onClick={close} />
            <div className="menu">
              <div className="menu-item selected mobile-item">
                <p>Inicio</p>
              </div>
              <div className="menu-item">
                <p>Meus Cursos</p>
              </div>
              <div className="menu-item">
                <p>Meu Carrinho</p>
              </div>
              <div className="menu-item">
                <p>Sair</p>
              </div>
            </div>
          </S.Menu>
        </S.Container>
      </Container>
    </S.Background>
  );
}

export default Header;