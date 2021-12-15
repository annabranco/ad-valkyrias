import React from 'react';
import { styled, css } from 'frontity';
import { FootballFieldImg } from '../../../../assets/images';

export const PlayersDetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 90px;
`;
PlayersDetailsWrapper.displayName = 'PlayersDetailsWrapper';

export const OuterFootballField = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
OuterFootballField.displayName = 'OuterFootballField';

export const FootballField = styled.div`
  display: block;
  position: relative;
  margin-top: 20px;
  background: url(${FootballFieldImg});
  height: 153px;
  width: 114px;
`;
FootballField.displayName = 'FootballField';

export const PlayerIcon = styled.div`
  opacity: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  background: ${({ playerPosition }) => (playerPosition === 'GK' ? '#e57906' : '#004D00')};
  height: 28px;
  width: 28px;
  font-size: 17px;
  color: white;
  top: ${({ playerImgPosition }) => (playerImgPosition.top ? playerImgPosition.top : 'auto')};
  bottom: ${({ playerImgPosition }) => (playerImgPosition.bottom ? playerImgPosition.bottom : 'auto')};
  right: ${({ playerImgPosition }) => (playerImgPosition.right ? playerImgPosition.right : 'auto')};
  left: ${({ playerImgPosition }) => (playerImgPosition.left ? playerImgPosition.left : 'auto')};
`;
PlayerIcon.displayName = 'PlayerIcon';

export const PlayerPosition = styled.p`
  margin-top: -3px;
  text-align: center;
  font-style: italic;
  ${({ position }) =>
    position === 'GK' &&
    css`
      margin-top: 4px;
    `}
`;
PlayerPosition.displayName = 'PlayerPosition';

export const ContainerPlayerCity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
ContainerPlayerCity.displayName = 'ContainerPlayerCity';

export const PlayerDetailsInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  botom: 0;
  left: -48vw;
  width: 100%;

  @media all and (min-width: 768px) {
    position: unset;
    margin-top: 50px;
    flex-direction: column;
  }
`;
PlayerDetailsInfo.displayName = 'PlayerDetailsInfo';

export const ContainerPlayerSince = styled.p``;
ContainerPlayerSince.displayName = 'ContainerPlayerSince';

export const ContainerPlayerNetworking = styled.div`
  position: absolute;
  top: -240px;
  right: -55vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-top: 5px;

  @media all and (min-width: 768px) {
    top: unset;
    bottom: 35%;
    right: 5%;
    width: 30%;
    justify-content: flex-start;
  }
`;
ContainerPlayerNetworking.displayName = 'ContainerPlayerNetworking';

export const CountryFlag = styled.img`
  margin-left: 10px;
`;
CountryFlag.displayName = 'CountryFlag';
