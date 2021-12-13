import React from "react";
import { connect } from "frontity";
import { playerData } from "../utils";
import Link from "../../../core/Link/LinkComponent";
import {
  Container,
  Shirt,
  PlayerNumber,
  PlayerName,
} from "./PlayersList.styles";

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
