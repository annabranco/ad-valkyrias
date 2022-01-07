import { styled } from 'frontity';

export const MapFrame = styled.iframe`
  margin: 50px 0 0 30px;
  border: 1px solid black;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  width: 85%;
  height: 60vh;
  border-radius: 15px;

  @media all and (min-width: 768px) {
    margin: 50px 0 0 30px;
    width: 85%;
    height: 60vh;
  }
`;
MapFrame.displayName = 'MapFrame';

export const MapComponentText = styled.p`
  margin: 50px 0 0 30px;
  width: 85%;
  text-align: justify;

  & span {
    color: green;
    font-weight: 900;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  }

  @media all and (min-width: 768px) {
    margin: 50px 0 0 30px;
  }
`;
MapComponentText.displayName = 'MapComponentText';
