import React from 'react';
import { styled } from 'frontity';
import { ShirtPlayer, ShirtGK } from '../../../../assets/images';

export const PlayersListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  flex-wrap: wrap;
  bottom: 0;
  left: 0;

  @media all and (min-width: 768px) {
    margin-left: 15vw;
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

    & > p {
      transform: scale(1.2);
    }
  }

  @media all and (min-width: 768px) {
    width: 100px;
    height: 100px;
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
  margin-top: ${({ letters }) => (letters > 7 ? '-9px' : '-10px')};

  @media all and (min-width: 768px) {
    font-size: 3rem;
    margin-top: ${({ letters }) => (letters > 7 ? '-12px' : '-10px')};
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
  margin: 13px 0 0;

  @media all and (min-width: 768px) {
    font-size: ${({ letters }) => (letters > 7 ? '1.1rem' : '1.2rem')};
    margin: ${({ letters }) => (letters > 7 ? '16px 0 0' : '13px 0 0')};
  }
`;
PlayerName.displayName = 'PlayerName';
