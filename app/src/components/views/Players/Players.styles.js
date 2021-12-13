import { styled } from "frontity";

export const Container = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  align-items: flex-start;
  overflow: hidden;
`;
Container.displayName = "Container";
