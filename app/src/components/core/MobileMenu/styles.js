import { styled } from "frontity";

export const MenuToggle = styled.button`
  position: absolute;
  right: 2vw;
  top: 5px;
  background: transparent;
  border: 0;
  color: white;
  z-index: 15;
  height: 12vw;
  width: 12vw;
  display: none;

  @media all and (min-width: 560px) {
    right: -2vw;
    top: -20px;
  }

  @media all and (min-width: 800px) {
    right: -3vw;
    top: -30px;
  }

  @media (max-width: 920px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
MenuToggle.displayName = "MenuToggle";
