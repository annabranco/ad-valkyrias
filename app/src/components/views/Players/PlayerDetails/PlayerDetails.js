import React from 'react';
import { connect } from 'frontity';
import SocialLink from '../../../sharedElements/SocialLink/SocialLink';
import { playerData } from '../utils';
import { COUNTRIES } from '../../../../utils/countries';
import { getPlayerImgPosition, POSITIONS } from '../../../../utils/positions';
import { RainbowFlag } from '../../../../assets/images/flags';
import { getFlagURL } from '../../../../utils/flags';
import {
  PlayersDetailsWrapper,
  OuterFootballField,
  FootballField,
  PlayerIcon,
  ContainerPlayerCity,
  ContainerPlayerSince,
  ContainerPlayerNetworking,
  CountryFlag,
  PlayerPosition,
  PlayerDetailsInfo,
} from './PlayerDetails.styles';

const PlayerDetails = ({ state }) => {
  const data = state.source.get(state.router.link);
  const player = playerData(state.source.page[data.id]);
  const country = player.country;
  const countryCode = COUNTRIES[country.toLowerCase()];
  const countryFlag = countryCode ? getFlagURL(countryCode) : RainbowFlag;

  return (
    <PlayersDetailsWrapper>
      <div>
        <OuterFootballField>
          <FootballField>
            <PlayerIcon playerImgPosition={getPlayerImgPosition(player.position)} playerPosition={player.position}>
              {player.shirt}
            </PlayerIcon>
          </FootballField>
        </OuterFootballField>
        <PlayerPosition position={player.position}>{POSITIONS.es[player.position]}</PlayerPosition>
        <PlayerDetailsInfo>
          <ContainerPlayerCity>
            {player.city}
            <CountryFlag src={countryFlag} alt={`Flag of ${player.country}`} />
          </ContainerPlayerCity>
          <ContainerPlayerSince>Desde {player.since}</ContainerPlayerSince>
          <ContainerPlayerNetworking>
            {player.instagram && <SocialLink link={player.instagram} type="Instagram" />}
            {player.facebook && <SocialLink link={player.facebook} type="Facebook" />}
            {player.twitter && <SocialLink link={player.twitter} type="Twitter" />}
          </ContainerPlayerNetworking>
        </PlayerDetailsInfo>
      </div>
    </PlayersDetailsWrapper>
  );
};

export default connect(PlayerDetails);
