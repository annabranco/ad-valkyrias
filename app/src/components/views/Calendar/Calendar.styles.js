import { styled } from 'frontity';

export const CalendarFrame = styled.iframe`
  margin: 25% 0 0 30px;
  border: 1px solid black;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  width: 85%;
  height: 70vh;
  border-radius: 10px;

  @media all and (min-width: 920px) {
    margin: 8% 0 0 30px;
    width: 85%;
    height: 80vh;
  }

  @media all and (orientation:portrait) and (min-width: 768px) and (min-height: 1120px) {
    margin: 15% 0 0 50%;
    transform: translate(-50%, 0);
  }

  @media all and (orientation:landscape) and (min-width: 640px) and (min-height: 360px) {
    margin: 7% 0 0 50%;
    transform: translate(-50%, 0);
  }
`;
CalendarFrame.displayName = 'CalendarFrame';
