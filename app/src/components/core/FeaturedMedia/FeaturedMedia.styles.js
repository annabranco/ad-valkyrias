import { styled } from "frontity";
import Image from "@frontity/components/image";

export const Container = styled.div`
  margin-top: 16px;
  height: 300px;
  ${({ isAmp }) => isAmp && "position: relative;"};
`;
Container.displayName = "Container";

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
StyledImage.displayName = "StyledImage";
