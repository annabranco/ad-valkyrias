import React from "react";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import Post from "../../../core/Post/Post";
import { PlayersArea } from "./PlayerInfo.styles";

const PlayerInfo = () => (
  <PlayersArea>
    <Post />
    <PlayerDetails />
  </PlayersArea>
);

export default PlayerInfo;
