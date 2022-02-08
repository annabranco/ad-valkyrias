import {
  GK,
  SW,
  RB,
  RCB,
  CB,
  LCB,
  LB,
  RWB,
  LWB,
  RDM,
  CDM,
  LDM,
  RM,
  RCM,
  CM,
  LCM,
  LM,
  RAM,
  CAM,
  LAM,
  RW,
  CF,
  LW,
  RS,
  ST,
  LS,
  GKS,
  DEF,
  MID,
  STR,
  TEC
} from "../constants/positions";

export const getPlayerImgPosition = position => {
  const playerImgPosition = {};
  switch (position) {
    case GK:
      playerImgPosition.bottom = '-10px';
      playerImgPosition.left = '43px';
      break;
    case SW:
      playerImgPosition.bottom = '10px';
      playerImgPosition.left = '43px';
      break;
    case RB:
      playerImgPosition.bottom = '20px';
      playerImgPosition.right = '5px';
      break;
    case RCB:
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '53px';
      break;
    case CB:
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '43px';
      break;
    case LCB:
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '33px';
      break;
    case LB:
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '5px';
      break;
    case RWB:
      playerImgPosition.bottom = '25px';
      playerImgPosition.right = '5px';
      break;
    case LWB:
      playerImgPosition.bottom = '25px';
      playerImgPosition.left = '5px';
      break;
    case RDM:
      playerImgPosition.bottom = '35px';
      playerImgPosition.right = '5px';
      break;
    case CDM:
      playerImgPosition.bottom = '35px';
      playerImgPosition.left = '43px';
      break;
    case LDM:
      playerImgPosition.bottom = '35px';
      playerImgPosition.left = '5px';
      break;
    case RM:
      playerImgPosition.bottom = '63px';
      playerImgPosition.right = '5px';
      break;
    case RCM:
      playerImgPosition.bottom = '63px';
      playerImgPosition.right = '28px';
      break;
    case CM:
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '43px';
      break;
    case LCM:
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '28px';
      break;
    case LM:
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '5px';
      break;
    case RAM:
      playerImgPosition.top = '35px';
      playerImgPosition.right = '5px';
      break;
    case CAM:
      playerImgPosition.top = '35px';
      playerImgPosition.left = '43px';
      break;
    case LAM:
      playerImgPosition.top = '35px';
      playerImgPosition.left = '5px';
      break;
    case RW:
      playerImgPosition.top = '18px';
      playerImgPosition.right = '10px';
      break;
    case CF:
      playerImgPosition.top = '18px';
      playerImgPosition.left = '43px';
      break;
    case LW:
      playerImgPosition.top = '18px';
      playerImgPosition.left = '10px';
      break;
    case RS:
      playerImgPosition.top = '5px';
      playerImgPosition.right = '28px';
      break;
    case ST:
      playerImgPosition.top = '5px';
      playerImgPosition.left = '43px';
      break;
    case LS:
      playerImgPosition.top = '5px';
      playerImgPosition.left = '28px';
      break;
    default:
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '43px';
      break;
  }
  return playerImgPosition;
};

export const gerPlayerGroup = position => {
  switch (position) {
    case GK:
      return GKS;

    case SW:
    case RB:
    case RCB:
    case CB:
    case LCB:
    case LB:
    case RWB:
    case LWB:
      return DEF;

    case RDM:
    case CDM:
    case LDM:
    case RM:
    case RCM:
    case CM:
    case LCM:
    case LM:
    case RAM:
    case CAM:
    case LAM:
    case RW:
      return MID;

    case CF:
    case LW:
    case RS:
    case ST:
    case LS:
      return STR;

    default:
      return TEC;
  }
};