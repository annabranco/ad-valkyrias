import { styled } from 'frontity';
import { gradientBackgroundDesktop, gradientBackgroundDevices } from '../../config/globalStyles';

export const HomeWrapper = styled.div`
  position: absolute;
  top: 80px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
  ${gradientBackgroundDevices}

   @media all and (min-height: 400px) {
    max-height: calc(100vh - 100px);
  }

  @media all and (min-width: 384px) and (min-height: 400px) {
    max-height: calc(100vh - 180px);
  }

  @media all and (min-width: 920px) and (min-height: 400px) {
    ${gradientBackgroundDesktop}
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
    width: 100%;
    top: 50px;
    left: 0;
  }
`;
HomeWrapper.displayName = 'HomeWrapper';

export const MainImage = styled.img`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 95%;
  filter: contrast(1.2);

  @media all and (min-width: 920px) {
    display: block;
    position: absolute;
    top: unset;
    bottom: -10px;
    left: 50%;
    transform: translate(-30%, 0);
    width: 52%;
    filter: contrast(1.2);
  }
`;
MainImage.displayName = 'MainImage';
