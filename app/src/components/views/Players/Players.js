import React from "react";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import Post from "../../core/Post/Post";
import { PlayersArea } from "./Players.styles";

const Players = () => (
  <PlayersArea>
    <Post />
    <PlayerDetails />
  </PlayersArea>
);

export default Players;
