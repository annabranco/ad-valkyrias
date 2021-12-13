import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { playerData } from "./utils";
import ShirtImage from "../../assets/images/shirt.png";
import ShirtGKImage from "../../assets/images/shirt-gk.png";

const PlayersList = ({ state }) => {
  const data = state.source.get("/players/");
  const players = data.items
    .map((item) => playerData(state.source.page[item.id]))
    .sort((a, b) => a.shirt - b.shirt);
  return (
    <>
      <Container>
        {players &&
          players.map((player) => (
            <Shirt
              key={player.id}
              isSelected={state.router.link === player.link}
              position={player.position}
            >
              <Link link={player.link}>
                <PlayerName
                  letters={player.alias.length}
                  position={player.position}
                >
                  {player.alias}
                </PlayerName>
                <PlayerNumber
                  letters={player.alias.length}
                  position={player.position}
                >
                  {player.shirt}
                </PlayerNumber>
              </Link>
            </Shirt>
          ))}
      </Container>
    </>
  );
};

export default connect(PlayersList);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 15vw;
`;

const Shirt = styled.div`
  background-image: url(${({ position }) =>
    position === "GK" ? ShirtGKImage : ShirtImage});
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

const PlayerNumber = styled.p`
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

const PlayerName = styled.p`
  color: ${({ position }) => (position === "GK" ? "black" : "white")};
  font-family: "Bebas Neue", sans-serif;
  margin: 10px 0 0;
  padding: 0;
  text-align: center;
  font-size: ${({ letters }) => (letters > 7 ? "1.1rem" : "1.2rem")};
  letter-spacing: ${({ letters }) => (letters > 7 ? "-1px" : "normal")};
  margin: ${({ letters }) => (letters > 7 ? "16px 0 0" : "13px 0 0")};
`;
