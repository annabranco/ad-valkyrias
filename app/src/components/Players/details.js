import React from "react";
import { connect, styled } from "frontity";
import { playerData } from "./utils";
import { COUNTRIES } from "../../utils/countries";
import { POSITIONS } from "../../utils/positions";
import FootballFieldImg from "../../assets/images/footballField.jpg";
import RainbowFlag from "../../assets/images/rainbow-flag.png";
import { getFlagURL } from "../../utils/flags";
import SocialLink from "../elements/SocialLink/SocialLink";

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
    <Container>
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
    </Container>
  );
};

export default connect(PlayerDetails);

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  color: black;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
`;

const OuterFootballField = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

const FootballField = styled.div`
  display: block;
  position: relative;
  margin-top: 20px;
  background: url(${FootballFieldImg});
  height: 153px;
  width: 114px;
`;

const PlayerIcon = styled.div`
  opacity: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  background: ${({ playerPosition }) =>
    playerPosition === "GK" ? "#e57906" : "#004D00"};
  height: 28px;
  width: 28px;
  font-size: 17px;
  color: white;
  top: ${({ playerImgPosition }) =>
    playerImgPosition.top ? playerImgPosition.top : "auto"};
  bottom: ${({ playerImgPosition }) =>
    playerImgPosition.bottom ? playerImgPosition.bottom : "auto"};
  right: ${({ playerImgPosition }) =>
    playerImgPosition.right ? playerImgPosition.right : "auto"};
  left: ${({ playerImgPosition }) =>
    playerImgPosition.left ? playerImgPosition.left : "auto"};
`;

const ContainerPlayerCity = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 250px;
`;

const ContainerPlayerSince = styled.div`
  position: relative;
  top: 280px;
`;

const ContainerPlayerTwitter = styled.div`
  position: relative;
  top: 310px;
`;

const CountryFlag = styled.img`
  margin-left: 10px;
`;

const TwitterButton = styled.img`
  width: 50px;
`;
