import { styled } from 'frontity';

export const HomeWrapper = styled.div`
  position: absolute;
  top: 80px;
  height: 100%;
  max-height: calc(100vh - 180px);
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
  background-image: linear-gradient(to bottom, rgba(5, 73, 9, 0.4), rgba(172, 233, 175, 0.5), white, white);

  @media all and (min-width: 768px) {
    background-image: linear-gradient(to bottom, rgba(5, 73, 9, 0.25), rgba(172, 233, 175, 0.2), white, white);
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
    width: 100%;
    top: 50px;
    left: 0;
  }
`;
HomeWrapper.displayName = 'HomeWrapper';

export const MainImage = styled.img`
  display: none;

  @media all and (min-width: 768px) {
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-30%, 0);
    width: 60%;
  }
`;
MainImage.displayName = 'MainImage';

export const MainImageDevices = styled.img`
  position: absolute;
  top: 30px;
  width: 100%;

  @media all and (min-width: 768px) {
    display: none;
  }
`;
MainImageDevices.displayName = 'MainImageDevices';
