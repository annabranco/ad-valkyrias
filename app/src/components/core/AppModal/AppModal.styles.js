import { styled } from "frontity";
import Link from "../Link/LinkComponent";

export const MenuOverlay = styled.div`
  background-image: linear-gradient(to bottom, #004d00, mediumseagreen);

  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;
MenuOverlay.displayName = "MenuOverlay";

export const MenuContent = styled.div`
  z-index: 3;
  position: relative;
`;
MenuContent.displayName = "MenuContent";

export const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
  }
`;
MenuLink.displayName = "MenuLink";

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
ModalTitleWrapper.displayName = "ModalTitleWrapper";

export const ModalTitle = styled.p`
  z-index: 3;
  font-family: RunesFont;
  font-size: 2.5rem;
  color: white;
  margin: 20px auto 20px;
  text-align: center;
`;
ModalTitle.displayName = "ModalTitle";

export const ModalLogo = styled.img`
  height: 150px;
  width: 150px;
  margin: 0 auto 20px;
`;
ModalLogo.displayName = "ModalLogo";
