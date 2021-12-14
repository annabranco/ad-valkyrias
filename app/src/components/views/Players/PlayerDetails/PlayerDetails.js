import React from "react";
import { connect } from "frontity";
import SocialLink from "../../../sharedElements/SocialLink/SocialLink";
import { playerData } from "../utils";
import { COUNTRIES } from "../../../../utils/countries";
import { POSITIONS } from "../../../../utils/positions";
import { RainbowFlag } from "../../../../assets/images/flags";
import { getFlagURL } from "../../../../utils/flags";
import {
  PlayersDetailsWrapper,
  OuterFootballField,
  FootballField,
  PlayerIcon,
  ContainerPlayerCity,
  ContainerPlayerSince,
  ContainerPlayerTwitter,
  CountryFlag,
} from "./PlayerDetails.styles";

const PlayerDetails = ({ state }) => {
  const data = state.source.get(state.router.link);
  const player = playerData(state.source.page[data.id]);
  const country = player.country;
  const countryCode = COUNTRIES[country.toLowerCase()];
  const countryFlag = countryCode ? getFlagURL(countryCode) : RainbowFlag;
  const playerImgPosition = {};

  switch (player.position) {
    case "GK":
      playerImgPosition.bottom = "-10px";
      playerImgPosition.left = "43px";
      break;
    case "SW":
      playerImgPosition.bottom = "10px";
      playerImgPosition.left = "43px";
      break;
    case "RB":
      playerImgPosition.bottom = "20px";
      playerImgPosition.right = "5px";
      break;
    case "RCB":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "53px";
      break;
    case "CB":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "43px";
      break;
    case "LCB":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "33px";
      break;
    case "lB":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "5px";
      break;
    case "RWB":
      playerImgPosition.bottom = "25px";
      playerImgPosition.right = "5px";
      break;
    case "LWB":
      playerImgPosition.bottom = "25px";
      playerImgPosition.left = "5px";
      break;

    case "RDM":
      playerImgPosition.bottom = "35px";
      playerImgPosition.right = "28px";
      break;
    case "CDM":
      playerImgPosition.bottom = "35px";
      playerImgPosition.left = "43px";
      break;
    case "LDM":
      playerImgPosition.bottom = "35px";
      playerImgPosition.left = "28px";
      break;
    case "RM":
      playerImgPosition.bottom = "63px";
      playerImgPosition.right = "5px";
      break;
    case "MCR":
      playerImgPosition.bottom = "63px";
      playerImgPosition.right = "28px";
      break;
    case "CM":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "43px";
      break;
    case "MCL":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "28px";
      break;
    case "LM":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "5px";
      break;

    case "RAM":
      playerImgPosition.bottom = "50px";
      playerImgPosition.right = "28px";
      break;
    case "AM":
      playerImgPosition.bottom = "50px";
      playerImgPosition.left = "43px";
      break;
    case "LAM":
      playerImgPosition.bottom = "50px";
      playerImgPosition.left = "28px";
      break;
    case "RW":
      playerImgPosition.top = "18px";
      playerImgPosition.right = "10px";
      break;
    case "CF":
      playerImgPosition.top = "18px";
      playerImgPosition.left = "43px";
      break;
    case "LW":
      playerImgPosition.top = "18px";
      playerImgPosition.left = "10px";
      break;
    case "RS":
      playerImgPosition.top = "5px";
      playerImgPosition.right = "28px";
      break;
    case "ST":
      playerImgPosition.top = "5px";
      playerImgPosition.left = "43px";
      break;
    case "LS":
      playerImgPosition.top = "5px";
      playerImgPosition.left = "28px";
      break;
    default:
      playerImgPosition.top = 0;
      playerImgPosition.left = 0;
      break;
  }
  return (
    <PlayersDetailsWrapper>
      <div>
        <p>{POSITIONS.es[player.position]}</p>
        <OuterFootballField>
          <FootballField>
            <PlayerIcon
              playerImgPosition={playerImgPosition}
              playerPosition={player.position}
            >
              {player.shirt}
            </PlayerIcon>
          </FootballField>
        </OuterFootballField>
        <ContainerPlayerCity>
          {player.city}
          <CountryFlag src={countryFlag} alt={`Flag of ${player.country}`} />
        </ContainerPlayerCity>
        <ContainerPlayerSince>Desde {player.since}</ContainerPlayerSince>
        <ContainerPlayerTwitter>
          <SocialLink link={player.twitter} type="Instagram" />
        </ContainerPlayerTwitter>
      </div>
    </PlayersDetailsWrapper>
  );
};

export default connect(PlayerDetails);
