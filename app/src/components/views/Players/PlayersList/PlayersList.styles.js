import React from 'react';
import { styled, css } from 'frontity';
import { ShirtPlayer, ShirtGK } from '../../../../assets/images';

export const PlayersListWrapper = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 5px;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  grid-auto-flow: column;
  align-items: flex-end;

  @media all and (min-width: 768px) {
    left: 25vw;
    justify-content: center;
    overflow-x: auto;
    height: 200px;
    width: 75%;

    ${({ numOfPlayers }) => {
      if (numOfPlayers > 14) {
        return css`
          grid-template-columns: repeat(auto-fit, minmax(60px, 60px));
        `;
      }
      if (numOfPlayers > 20) {
        return css`
          grid-template-columns: repeat(auto-fit, minmax(60px, 50px));
        `;
      }
    }}
  }
`;
PlayersListWrapper.displayName = 'PlayersListWrapper';

export const Shirt = styled.div`
  background-image: url(${({ position }) => (position === 'GK' ? ShirtGK : ShirtPlayer)});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media all and (min-width: 768px) {
    background-size: 100%;
    width: 100px;
    height: 100px;

    ${({ numOfPlayers }) => {
      if (numOfPlayers > 14) {
        return css`
          zoom: 0.9;
        `;
      }
      if (numOfPlayers > 20) {
        return css`
          zoom: 0.8;
        `;
      }
    }}
  }
`;
Shirt.displayName = 'Shirt';

export const PlayerNumber = styled.p`
  color: ${({ position }) => (position === 'GK' ? 'white' : 'black')};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  padding: 0;
  text-align: center;
  font-weight: 900;
  transition: all 0.5s;
  opacity: ${({ position }) => (position === 'GK' ? '0.85' : '0.65')};
  margin-top: ${({ letters }) => (letters > 7 ? '-7px' : '-8px')};
  letter-spacing: -3px;
  margin-left: -3px;

  @media all and (min-width: 768px) {
    font-size: 3rem;
    margin-top: ${({ letters }) => (letters > 7 ? '-9px' : '-10px')};
  }
`;
PlayerNumber.displayName = 'PlayerNumber';

export const PlayerName = styled.p`
  color: ${({ position }) => (position === 'GK' ? 'black' : 'white')};
  font-family: 'Bebas Neue', sans-serif;
  padding: 0;
  text-align: center;
  font-size: ${({ letters }) => (letters > 7 ? '0.8rem' : '0.9rem')};
  letter-spacing: ${({ letters }) => (letters > 7 ? '-1px' : 'normal')};
  margin: ${({ letters }) => (letters > 7 ? '9px 0 0' : '8px 0 0')};

  @media all and (min-width: 768px) {
    font-size: ${({ letters }) => (letters > 7 ? '1.1rem' : '1.2rem')};
    margin: ${({ letters }) => (letters > 7 ? '14px 0 0' : '13px 0 0')};
  }
`;
PlayerName.displayName = 'PlayerName';
