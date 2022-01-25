import { styled } from 'frontity';
import {
  colorPrimary,
  colorPrimaryLight,
  darkGradientBarLight,
  fontFamilyTitle,
  fontSizeBig,
  fontSizeBigger,
  fontSizeHuge,
  fontSizeNormal,
  fontSizeSmall,
} from '../../../config/globalStyles';
import Link from '../../core/Link/LinkComponent';

export const HomeContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 50px;
  left: 0;
  ${darkGradientBarLight}
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 30px;
  width: 100%;
  padding: 30px 10px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);

  @media all and (min-width: 768px) {
    position: fixed;
    z-index: 4;
    padding: 10vh 0 0;
    bottom: unset;
    left: unset;
    height: 100%;
    width: 20vw;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
HomeContainer.displayName = 'HomeContainer';

export const HomeLogo = styled.img`
  display: none;

  @media all and (min-width: 768px) {
    z-index: 3;
    display: block;
    width: 250px;
    height: 250px;
    margin-bottom: 100px;
  }
`;
HomeLogo.displayName = 'HomeLogo';

export const HomeTitle = styled.h1`
  margin-top: 0;
  line-height: 5px;
  font-family: ${fontFamilyTitle};
  font-size: ${fontSizeBig};
  font-weight: 400;
  line-height: 0.9;
  color: ${colorPrimaryLight};
  user-select: none;
  max-width: 250px;

  & > span {
    font-size: ${fontSizeBig};
    font-weight: 400;
  }

  @media all and (min-width: 768px) {
    display: initial;
    font-size: ${fontSizeBigger};
    line-height: 0.8;
    margin-top: 0;
    font-weight: 200;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    & > span {
      color: ${colorPrimary};
      font-size: ${fontSizeHuge};
      font-weight: 600;
      margin-left: 0;
      vertical-align: initial;
    }
  }
`;
HomeTitle.displayName = 'HomeTitle';

export const AuthorInfo = styled.p`
  color: white;
  font-size: ${fontSizeSmall};
  text-shadow: 0 0 1px black;
`;
AuthorInfo.displayName = 'AuthorInfo';

export const City = styled.p`
  color: darkred;
  font-size: ${fontSizeSmall};
  font-family: 'Bebas Neue', sans-serif;
  text-shadow: 0 0 1px black;
  text-transform: uppercase;
  margin-top: -18px;
  text-align: center;
  opacity: 0.7;
  letter-spacing: 2px;

  @media all and (min-width: 768px) {
    margin-top: -20px;
    font-size: ${fontSizeNormal};
    letter-spacing: 4px;
    color: crimson;
  }
`;
City.displayName = 'City';

export const StyledLink = styled(Link)`
  font-size: 1rem;
  &:hover {
    color: yellow;
  }
`;
StyledLink.displayName = 'StyledLink';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;

  @media all and (min-width: 768px) {
    align-items: center;
  }
`;
TitleWrapper.displayName = 'TitleWrapper';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto 5px;
  width: 100%;
  display: none;

  @media all and (min-width: 768px) {
    display: block;
    align-items: center;
    position: absolute;
    bottom: 15vh;
    left: 50%;
    transform: translate(-50%, 0);
    display: block;
    width: max-content;
  }
`;
SocialWrapper.displayName = 'SocialWrapper';

export const SocialWrapperDevices = styled(SocialWrapper)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: max-content;
  display: block;

  @media all and (min-width: 768px) {
    display: none;
  }
`;
SocialWrapperDevices.displayName = 'SocialWrapperDevices';

export const Email = styled.p`
  color: gray;
  font-size: ${fontSizeSmall};
  text-shadow: 0 0 1px lightgray;
  font-weight: 400;
  position: absolute;
  bottom: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  display: block;

  @media all and (min-width: 768px) {
    width: 70%;
    bottom: 5vh;
  }
`;
Email.displayName = 'Email';
