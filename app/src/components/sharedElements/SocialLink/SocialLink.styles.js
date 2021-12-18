import { styled, css } from 'frontity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE, EMAIL } from '../../../constants/social';

export const SocialLogo = styled(FontAwesomeIcon)`
  margin: 0 10px;
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
  }}

  @media all and (min-width: 768px) {
    margin: 0 30px;
    height: 25px;
    width: 25px;
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
      top: -50%;
      transform: translate(-50%, 0);
    }
  }
`;
SocialLinkButton.displayName = 'SocialLinkButton';
