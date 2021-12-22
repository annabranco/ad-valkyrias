import React from 'react';
import { styled, css } from 'frontity';
import { FootballFieldImg } from '../../../../assets/images';

export const PlayersDetailsWrapper = styled.div`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  padding: 0 30px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 90px;
  overflow: hidden;

  @media all and (min-width: 768px) {
    width: 100%;
  }
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
  width: 114px;

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
  justify-content: flex-start;
  align-items: flex-start;
`;
ContainerPlayerCity.displayName = 'ContainerPlayerCity';

export const PlayerDetailsInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  grid-template-rows: repeat(5, 30px);

  width: 100%;

  & > span {
    color: gray;
  }

  @media all and (min-width: 768px) {
    position: unset;
    margin-top: 50px;
    flex-direction: column;
    grid-template-columns: 120px 2fr;
  }
`;
PlayerDetailsInfo.displayName = 'PlayerDetailsInfo';

export const ContainerPlayerInfo = styled.p`
  margin: 0;
  text-align: center;
  @media all and (min-width: 768px) {
    text-align: left;
  }
`;
ContainerPlayerInfo.displayName = 'ContainerPlayerInfo';

export const ContainerPlayerNetworking = styled.div`
  position: absolute;
  top: 9vh;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 5px;

  @media all and (min-width: 768px) {
    top: 6vh;
    /* right: 5%;
    width: 30%; */
    /* justify-content: flex-start; */
  }
`;
ContainerPlayerNetworking.displayName = 'ContainerPlayerNetworking';

export const CountryFlag = styled.img`
  margin-left: 50%;

  @media all and (min-width: 768px) {
    margin-left: 10px;
  }
`;
CountryFlag.displayName = 'CountryFlag';

export const PlayerInfoField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: flex-start;
  width: 100%;
`;
PlayerInfoField.displayName = 'PlayerInfoField';

export const HiddenOnSmallDevices = styled.span`
  display: none;
  @media all and (min-width: 768px) {
    display: block;
  }
`;
HiddenOnSmallDevices.displayName = 'HiddenOnSmallDevices';
