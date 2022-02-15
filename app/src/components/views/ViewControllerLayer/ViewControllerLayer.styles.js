import styled from '@emotion/styled';
import { darkGradientOverlay } from '../../../config/globalStyles';

export const Screen = styled.div`
   ${darkGradientOverlay};
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  border: 0;
  overflow: hidden auto;

  @media all and (min-height: 400px) {
    display: none;
  }

  @media (min-width: 700px) and (min-height: 500px) and (max-width: 1180px) and (max-height: 820px) {
    display: flex;
  }
`;
Screen.displayName = 'Screen';
