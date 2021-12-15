export const POSITIONS = {
  en: {
    GK: 'Goalkeeper',
    SW: 'Sweeper',
    RB: 'Right Fullback',
    RCB: 'Right Center-back',
    CB: 'Center-back',
    LCB: 'Left Center-back',
    LB: 'Left Fullback',
    RWB: 'Right Wing-back',
    LWB: 'Left Wing-back',
    RDM: 'Right Defensive Mid',
    CDM: 'Central Defensive Mid',
    LDM: 'Left Defensive Mid',
    RM: 'Right Midfielder',
    RCM: 'Right Central Mid',
    CM: 'Central Midfielder',
    LCM: 'Left Central Mid',
    LM: 'Left Midfielder',
    RAM: 'Right Attacking Mid',
    CAM: 'Central Attacking Mid',
    LAM: 'Left Attacking Mid',
    RW: 'Right Winger',
    CF: 'Center Forward',
    LW: 'Left Winger',
    RS: 'Right Striker',
    ST: 'Striker',
    LS: 'Left Striker',
  },
  es: {
    GK: 'Portera',
    SW: 'Líbera',
    RB: 'Lateral derecha',
    RCB: 'Defensa derecha',
    CB: 'Central',
    LCB: 'Defensa izquierda',
    LB: 'Lateral izquierda',
    RWB: 'Volante derecha',
    LWB: 'Volante izquierda',
    RDM: 'Volante externa derecha',
    CDM: 'Mediocentral',
    LDM: 'Volante externa izquierda',
    RM: 'Externa derecha',
    RCM: 'Medio derecha',
    CM: 'Medio central',
    LCM: 'Medio izquierda',
    LM: 'Externa izquierda',
    RAM: 'Medio ofensiva derecha',
    CAM: 'Volante de ligación',
    LAM: 'Medio ofensiva izquierda',
    RW: 'Punta derecha',
    CF: 'Punta',
    LW: 'Punta izquierda',
    RS: 'Extrema derecha',
    ST: 'Delantera',
    LS: 'Extrema izquierda',
  },
};

export const getPlayerImgPosition = position => {
  const playerImgPosition = {};
  switch (position) {
    case 'GK':
      playerImgPosition.bottom = '-10px';
      playerImgPosition.left = '43px';
      break;
    case 'SW':
      playerImgPosition.bottom = '10px';
      playerImgPosition.left = '43px';
      break;
    case 'RB':
      playerImgPosition.bottom = '20px';
      playerImgPosition.right = '5px';
      break;
    case 'RCB':
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '53px';
      break;
    case 'CB':
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '43px';
      break;
    case 'LCB':
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '33px';
      break;
    case 'lB':
      playerImgPosition.bottom = '20px';
      playerImgPosition.left = '5px';
      break;
    case 'RWB':
      playerImgPosition.bottom = '25px';
      playerImgPosition.right = '5px';
      break;
    case 'LWB':
      playerImgPosition.bottom = '25px';
      playerImgPosition.left = '5px';
      break;

    case 'RDM':
      playerImgPosition.bottom = '35px';
      playerImgPosition.right = '28px';
      break;
    case 'CDM':
      playerImgPosition.bottom = '35px';
      playerImgPosition.left = '43px';
      break;
    case 'LDM':
      playerImgPosition.bottom = '35px';
      playerImgPosition.left = '28px';
      break;
    case 'RM':
      playerImgPosition.bottom = '63px';
      playerImgPosition.right = '5px';
      break;
    case 'MCR':
      playerImgPosition.bottom = '63px';
      playerImgPosition.right = '28px';
      break;
    case 'CM':
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '43px';
      break;
    case 'MCL':
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '28px';
      break;
    case 'LM':
      playerImgPosition.bottom = '63px';
      playerImgPosition.left = '5px';
      break;
    case 'RAM':
      playerImgPosition.bottom = '50px';
      playerImgPosition.right = '28px';
      break;
    case 'AM':
      playerImgPosition.bottom = '50px';
      playerImgPosition.left = '43px';
      break;
    case 'LAM':
      playerImgPosition.bottom = '50px';
      playerImgPosition.left = '28px';
      break;
    case 'RW':
      playerImgPosition.top = '18px';
      playerImgPosition.right = '10px';
      break;
    case 'CF':
      playerImgPosition.top = '18px';
      playerImgPosition.left = '43px';
      break;
    case 'LW':
      playerImgPosition.top = '18px';
      playerImgPosition.left = '10px';
      break;
    case 'RS':
      playerImgPosition.top = '5px';
      playerImgPosition.right = '28px';
      break;
    case 'ST':
      playerImgPosition.top = '5px';
      playerImgPosition.left = '43px';
      break;
    case 'LS':
      playerImgPosition.top = '5px';
      playerImgPosition.left = '28px';
      break;
    default:
      playerImgPosition.top = 0;
      playerImgPosition.left = 0;
      break;
  }
  return playerImgPosition;
};
