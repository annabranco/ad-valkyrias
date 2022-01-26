import { styled, css } from 'frontity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE } from '../../../constants/social';
import { MAIN, MAIN_DEVICES } from '../../../constants/global';
import { colorTerciary } from '../../../config/globalStyles';

export const SocialLogo = styled(FontAwesomeIcon)`
  margin: ${({ place }) => (place === MAIN_DEVICES ? '0 30px' : '0 10px')};
  height: 25px;
  width: 25px;
  font-size: ${({ place }) => (place === MAIN_DEVICES ? '1.8rem' : '1.2rem')};
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  ${({ type }) => {
    if (type === INSTAGRAM) {
      return css`
        color: red;
      `;
    }
    if (type === FACEBOOK) {
      return css`
        color: blue;
      `;
    }
    if (type === TWITTER) {
      return css`
        color: lightblue;
      `;
    }
    if (type === YOUTUBE) {
      return css`
        color: crimson;
      `;
    }
  }}

  @media all and (min-width: 768px) {
    margin: 0 30px;
    height: 30px;
    width: 30px;
    font-size: 1.7rem;
  }
`;
SocialLogo.displayName = 'SocialLogo';

export const SocialLinkButton = styled.a`
  position: relative;
  text-decoration: none;
  color: ${colorTerciary};
  width: 50px;

  &:hover {
    &::after {
      position: absolute;
      content: '${({ type }) => type.toUpperCase()}';
      font-size: 0.7rem;
      left: ${({ place }) => (place === MAIN || place === MAIN_DEVICES ? '50%' : '80%')};
      top: ${({ place }) => (place === MAIN || place === MAIN_DEVICES ? 'unset' : '-50%')};
      bottom: ${({ place }) => (place === MAIN || place === MAIN_DEVICES ? '-80%' : 'unset')};
      transform: translate(-50%, 0);
    }
  }
`;
SocialLinkButton.displayName = 'SocialLinkButton';
