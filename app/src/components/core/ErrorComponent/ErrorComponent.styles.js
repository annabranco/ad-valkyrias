import { styled } from "frontity";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 10vh;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;
Container.displayName = "Container";

export const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: red;
  font-size: 4em;
  text-shadow: 0 0 3px black;
`;
Title.displayName = "Title";

export const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
Description.displayName = "Description";

export const Image = styled.img`
  width: 400px;
  margin-top: 60px;
`;
Image.displayName = "Image";
