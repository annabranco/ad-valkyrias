import { styled } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLogo = styled(FontAwesomeIcon)`
  margin: -10px 0 0 -5px;
  height: 40px;
  width: 40px;
  color: red;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
SocialLogo.displayName = "SocialLogo";

export const SocialLinkButton = styled.a`
  text-decoration: none;
  color: black;
`;
