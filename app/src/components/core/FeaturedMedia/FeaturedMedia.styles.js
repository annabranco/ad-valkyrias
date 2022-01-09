import { styled } from 'frontity';
import Image from '@frontity/components/image';

export const FeaturedContainer = styled.div`
  margin-top: 16px;
  height: 300px;
  ${({ isAmp }) => isAmp && 'position: relative;'};
`;
FeaturedContainer.displayName = 'FeaturedContainer';

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center 40%;
  border-radius: 15px;
`;
StyledImage.displayName = 'StyledImage';
