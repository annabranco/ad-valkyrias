import { styled } from 'frontity';
import { colorSecondary, fontFamilyMainTitle, fontSizeXLarge } from '../../../config/globalStyles';
import Link from '../../core/Link/LinkComponent';

export const HeaderSection = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  height: 50px;

  @media all and (min-width: 920px) {
    height: 10px;
  }
`;
HeaderSection.displayName = 'HeaderSection';

export const Title = styled.h2`
  position: absolute;
  right: 60px;
  top: -35px;
  font-family: ${fontFamilyMainTitle};
  font-size: ${fontSizeXLarge};
  color: ${colorSecondary};
  opacity: 0.1;

  @media all and (min-width: 920px) {
    right: 2vw;
    top: -45px;
    font-size: 3rem;
  }
`;
Title.displayName = 'Title';

export const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;
Description.displayName = 'Description';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
StyledLink.displayName = 'StyledLink';

export const LoginButton = styled.div`
  background-image: linear-gradient(to left, gray, lightgray);
  width: 120px;
  border: 1px solid black;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  cursor: pointer;
  color: darkred;
  text-shadow: 1px 1px 1px black;
  &:hover {
    color: gold;
  }
`;
LoginButton.displayName = 'LoginButton';

export const HeaderLogo = styled.img`
  position: absolute;
  top: 0;
  left: 10px;
  height: 80px;
  width: 80px;

  @media all and (min-width: 560px) {
    height: 120px;
    width: 120px;
  }

  @media all and (min-width: 920px) {
    display: none;
  }
`;
HeaderLogo.displayName = 'HeaderLogo';
