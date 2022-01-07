import { styled } from 'frontity';

export const CalendarFrame = styled.iframe`
  margin: 50px 0 0 30px;
  border: 1px solid black;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  width: 85%;
  height: 70vh;
  border-radius: 10px;

  @media all and (min-width: 768px) {
    margin: 50px 0 0 30px;
    width: 85%;
    height: 80vh;
  }
`;
CalendarFrame.displayName = 'CalendarFrame';
