import React, { useEffect } from 'react';
import { connect } from 'frontity';
import { playerData } from '../utils';
import Link from '../../../core/Link/LinkComponent';
import { PlayersListWrapper, Shirt, PlayerNumber, PlayerName } from './PlayersList.styles';

const PlayersList = ({ state, actions }) => {
  const data = state.source.get('/senior/');
  const { players } = state;
  const { updatePlayers } = actions.players;
  const playersList =
    players || data?.items?.map(item => playerData(state.source.page[item.id])).sort((a, b) => a.shirt - b.shirt);

  useEffect(() => {
    if (!players) {
      const updatedPlayers = data?.items
        .map(item => playerData(state.source.page[item.id]))
        .sort((a, b) => a.shirt - b.shirt);
      updatePlayers({ updatedPlayers });
    }
  }, [state, actions]);

  return (
    <PlayersListWrapper>
      {playersList?.map(player => (
        <Shirt key={player.id} isSelected={state.router.link === player.link} position={player.position}>
          <Link link={player.link}>
            <PlayerName letters={player.alias.length} position={player.position}>
              {player.alias}
            </PlayerName>
            <PlayerNumber letters={player.alias.length} position={player.position}>
              {player.shirt}
            </PlayerNumber>
          </Link>
        </Shirt>
      ))}
    </PlayersListWrapper>
  );
};

export default connect(PlayersList);
