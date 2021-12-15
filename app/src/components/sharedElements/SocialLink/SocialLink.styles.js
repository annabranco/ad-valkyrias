import { styled, css } from 'frontity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLogo = styled(FontAwesomeIcon)`
  margin: 0 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  ${({ type }) => {
    if (type === 'Instagram') {
      return css`
        color: red;
      `;
    }
    if (type === 'Facebook') {
      return css`
        color: blue;
      `;
    }
    if (type === 'Twitter') {
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
  text-decoration: none;
  color: black;
`;
SocialLinkButton.displayName = 'SocialLinkButton';
