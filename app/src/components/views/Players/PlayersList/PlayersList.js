import React, { useEffect, useState } from 'react';
import { connect } from 'frontity';

import Link from '../../../core/Link/LinkComponent';

import { gerPlayerGroup } from '../../../../utils/positions';
import { playerData } from '../utils';

import { PlayersListWrapper, Shirt, PlayerNumber, PlayerName, PlayersGroup, GroupsButtonsWrapper, GroupButton } from './PlayersList.styles';
import { DEF, GKS, MID, STR } from '../../../../constants/positions';
import POSITIONS from '../../../../db/positions'
console.log('>>>>>>> POSITIONS', POSITIONS);


const PlayersList = ({ state, actions }) => {
  const data = state.source.get('/senior/');
  const { players } = state;
  const { language } = state.theme;
  const { updatePlayers } = actions.players;
  const [playersByGroup, updatePlayersByGroup] = useState();
  const [selectedGroup, changeSelectedGroup] = useState();

  const playersList =
    players || data?.items?.map(item => playerData(state.source.page[item.id])).sort((a, b) => a.shirt - b.shirt);

  const onSelectGroup = group => () => {
    changeSelectedGroup(group);
  }


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
  }, []);

  useEffect(() => {
    if (players) {
      const playersByGroup = {
        GKS: [],
        DEF: [],
        MID: [],
        STR: [],
        OTH: []
      }

      players.forEach(player => {
        const playerGroup = gerPlayerGroup(player.position);
        playersByGroup[playerGroup].push(player)
      });

      updatePlayersByGroup(playersByGroup)
    }
  }, [players]);

  return (
    <PlayersListWrapper>
      {playersByGroup && selectedGroup && (
        <PlayersGroup>
          {playersByGroup[selectedGroup].map(player => (
            <Link link={player.link} key={player.id}>
              <Shirt
                isSelected={state.router.link === player.link}
                numOfPlayers={playersByGroup[selectedGroup].length}
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
        </PlayersGroup>
      )}
      <GroupsButtonsWrapper>
        <GroupButton onClick={onSelectGroup(GKS)}>{POSITIONS[language][GKS]}</GroupButton>
        <GroupButton onClick={onSelectGroup(DEF)}>{POSITIONS[language][DEF]}</GroupButton>
        <GroupButton onClick={onSelectGroup(MID)}>{POSITIONS[language][MID]}</GroupButton>
        <GroupButton onClick={onSelectGroup(STR)}>{POSITIONS[language][STR]}</GroupButton>
        {/* <GroupButton onClick={onSelectGroup(TEC)}>{POSITIONS[TEC]}</GroupButton> */}
      </GroupsButtonsWrapper>
    </PlayersListWrapper>
  );
};

export default connect(PlayersList);
