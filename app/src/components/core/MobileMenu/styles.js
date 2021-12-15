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

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
MenuToggle.displayName = "MenuToggle";
