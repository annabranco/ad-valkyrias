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
        .sort((a, b) => {
          if (a.shirt && b.shirt) {
            if (a.shirt < b.shirt) {
              return -1;
            }
            if (a.shirt > b.shirt) {
              return 1;
            }
          }
          if (!a.shirt && b.shirt) {
            return 1;
          }
          if (!b.shirt && a.shirt) {
            return -1;
          }
          if (a.alias < b.alias) {
            return -1;
          }
          if (a.alias > b.alias) {
            return 1;
          }
          return 0;
        });
      updatePlayers({ updatedPlayers });
    }
  }, [state, actions]);

  return (
    <PlayersListWrapper numOfPlayers={playersList.length}>
      {playersList?.map(player => (
        <Link link={player.link} key={player.id}>
          <Shirt
            isSelected={state.router.link === player.link}
            numOfPlayers={playersList.length}
            position={player.position}
          >
            <PlayerName letters={player.alias.length} position={player.position}>
              {player.alias}
            </PlayerName>
            {typeof player.shirt === 'number' && !isNaN(player.shirt) && (
              <PlayerNumber letters={player.alias.length} position={player.position}>
                {player.shirt}
              </PlayerNumber>
            )}
          </Shirt>
        </Link>
      ))}
    </PlayersListWrapper>
  );
};

export default connect(PlayersList);
