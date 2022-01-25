import { styled } from 'frontity';
import { darkGradientBar, gradientMainBackground } from '../../config/globalStyles';

export const ScreenArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: none;
`;
ScreenArea.displayName = 'ScreenArea';

export const HeadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${darkGradientBar}
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
  overscroll-behavior: none;
`;
HeadContainer.displayName = 'HeadContainer';

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  ${gradientMainBackground}
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;

  @media all and (min-width: 768px) {
    min-height: 100vh;
    width: 95%;
  }
`;
Body.displayName = 'Body';

export const MainArea = styled.div`
  margin: 50px 0 0 0;
  height: 100%;
  min-height: 80vh;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;

  @media all and (min-width: 768px) {
    margin: 50px 0 0 30%;
  }
`;
MainArea.displayName = 'MainArea';
