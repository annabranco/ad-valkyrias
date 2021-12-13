import React from "react";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import Post from "../../core/Post/Post";
import { Container } from "./Players.styles";

const Players = () => (
  <Container>
    <Post />
    <PlayerDetails />
  </Container>
);

export default Players;
