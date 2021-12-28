import { styled, css } from 'frontity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE } from '../../../constants/social';
import { MAIN } from '../../../constants/global';

export const SocialLogo = styled(FontAwesomeIcon)`
  margin: 0 10px;
  height: 25px;
  width: 25px;
  font-size: 1.2rem;
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
  color: black;

  &:hover {
    &::after {
      position: absolute;
      content: '${({ type }) => type.toUpperCase()}';
      font-size: 0.7rem;
      left: 50%;
      top: ${({ place }) => (place === MAIN ? 'unset' : '-50%')};
      bottom: ${({ place }) => (place === MAIN ? '-80%' : 'unset')};
      transform: translate(-50%, 0);
    }
  }
`;
SocialLinkButton.displayName = 'SocialLinkButton';
