import { styled } from 'frontity';
import Link from '../Link/LinkComponent';
import {
  colorPrimaryLight,
  darkGradientOverlay,
  fontFamilyMainTitle,
  fontFamilyTitle,
  fontSizeBig,
  fontSizeBigger,
  fontSizeLarge,
  fontSizeXLarge,
} from '../../../config/globalStyles';

export const MenuOverlay = styled.div`
  ${darkGradientOverlay};

  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;
MenuOverlay.displayName = 'MenuOverlay';

export const MenuContent = styled.div`
  z-index: 3;
  position: relative;
  height: 100vh;

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
MenuContent.displayName = 'MenuContent';

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    width: 60%;
  }
`;
ModalTitleWrapper.displayName = 'ModalTitleWrapper';

export const ModalTitle = styled.p`
  z-index: 3;
  font-family: ${fontFamilyMainTitle};
  font-size: 2.5rem;
  color: white;
  margin: 20px auto;
  text-align: center;
`;
ModalTitle.displayName = 'ModalTitle';

export const ModalLogo = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto 20px;

    @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    margin-bottom: 50px;
  }
`;
ModalLogo.displayName = 'ModalLogo';

export const NavWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    position: unset;
    transform: none;
    width: 100%;
  }

  @media all and (min-width: 390px) {
    top: 55%;
  }

  @media all and (min-width: 420px) {
    top: 50%;
  }

  @media all and (min-width: 540px) and (min-height: 720px) {
    top: 55%;
  }
`;
NavWrapper.displayName = 'NavWrapper';

export const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: ${fontSizeBig};
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: ${fontFamilyTitle};

  @media all and (min-width: 360px) {
    margin: 0 0 10px 0;
  }

  @media all and (min-width: 390px) {
    font-size: ${fontSizeBigger};
    margin: 5% 0;
  }

  @media all and (min-width: 540px) and (min-height: 720px) {
    font-size: ${fontSizeBig};
    margin: 5% 0;
  }

  @media all and (min-width: 568px) {
    font-size: ${fontSizeBigger};
    margin: 10% 0;
  }

  @media all and (min-width: 768px) {
    font-size: ${fontSizeLarge};
    margin: 10% 0;
  }

  @media all and (min-width: 800px) {
    font-size: ${fontSizeXLarge};
    margin: 10% 0;
  }

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    font-size: ${fontSizeBig};
    margin: 2% 0;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current='page'] {
    color: ${colorPrimaryLight};
  }
`;
MenuLink.displayName = 'MenuLink';

export const LanguagesButtonWrapper = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 820px) and (min-height: 1180px) {
    bottom: 22%;
  }

  @media all and (min-width: 920px) {
    display: none;
  }

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    bottom: 42%;
    right: -45%;
    transform: none;
  }
`;
LanguagesButtonWrapper.displayName = 'LanguagesButtonWrapper';