import React from "react";
import { styled } from "frontity";
import { ShirtPlayer, ShirtGK } from "../../../../assets/images";

export const PlayersListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 15vw;
`;
PlayersListWrapper.displayName = "PlayersListWrapper";

export const Shirt = styled.div`
  background-image: url(${({ position }) =>
    position === "GK" ? ShirtGK : ShirtPlayer});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
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
`;
Shirt.displayName = "Shirt";

export const PlayerNumber = styled.p`
  color: ${({ position }) => (position === "GK" ? "white" : "black")};
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  padding: 0;
  text-align: center;
  font-weight: 900;
  transition: all 0.5s;
  opacity: ${({ position }) => (position === "GK" ? "0.85" : "0.65")};
  margin-top: ${({ letters }) => (letters > 7 ? "-12px" : "-10px")};
`;
PlayerNumber.displayName = "PlayerNumber";

export const PlayerName = styled.p`
  color: ${({ position }) => (position === "GK" ? "black" : "white")};
  font-family: "Bebas Neue", sans-serif;
  margin: 10px 0 0;
  padding: 0;
  text-align: center;
  font-size: ${({ letters }) => (letters > 7 ? "1.1rem" : "1.2rem")};
  letter-spacing: ${({ letters }) => (letters > 7 ? "-1px" : "normal")};
  margin: ${({ letters }) => (letters > 7 ? "16px 0 0" : "13px 0 0")};
`;
PlayerName.displayName = "PlayerName";
