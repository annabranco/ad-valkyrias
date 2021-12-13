import React from "react";
import { styled } from "frontity";
import { FootballFieldImg } from "../../../../assets/images";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  color: black;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
`;
Container.displayName = "Container";

export const OuterFootballField = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;
OuterFootballField.displayName = "OuterFootballField";

export const FootballField = styled.div`
  display: block;
  position: relative;
  margin-top: 20px;
  background: url(${FootballFieldImg});
  height: 153px;
  width: 114px;
`;
FootballField.displayName = "FootballField";

export const PlayerIcon = styled.div`
  opacity: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  background: ${({ playerPosition }) =>
    playerPosition === "GK" ? "#e57906" : "#004D00"};
  height: 28px;
  width: 28px;
  font-size: 17px;
  color: white;
  top: ${({ playerImgPosition }) =>
    playerImgPosition.top ? playerImgPosition.top : "auto"};
  bottom: ${({ playerImgPosition }) =>
    playerImgPosition.bottom ? playerImgPosition.bottom : "auto"};
  right: ${({ playerImgPosition }) =>
    playerImgPosition.right ? playerImgPosition.right : "auto"};
  left: ${({ playerImgPosition }) =>
    playerImgPosition.left ? playerImgPosition.left : "auto"};
`;
PlayerIcon.displayName = "PlayerIcon";

export const ContainerPlayerCity = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 250px;
`;
ContainerPlayerCity.displayName = "ContainerPlayerCity";

export const ContainerPlayerSince = styled.div`
  position: relative;
  top: 280px;
`;
ContainerPlayerSince.displayName = "ContainerPlayerSince";

export const ContainerPlayerTwitter = styled.div`
  position: relative;
  top: 310px;
`;
ContainerPlayerTwitter.displayName = "ContainerPlayerTwitter";

export const CountryFlag = styled.img`
  margin-left: 10px;
`;
CountryFlag.displayName = "CountryFlag";

export const TwitterButton = styled.img`
  width: 50px;
`;
TwitterButton.displayName = "TwitterButton";
