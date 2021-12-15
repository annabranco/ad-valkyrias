import { css } from 'frontity';
import RunesFont from '../assets/comic-runes.ttf';

export const globalStyles = css`
  @font-face {
    font-family: RunesFont;
    src: url(${RunesFont});
  }

  body {
    margin: 0;
    font-family: 'Barlow', sans-serif;
    overflow: auto;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  div,
  head,
  main,
  section {
    box-sizing: border-box;
  }
`;

export const fontFamilyMainTitle = 'RunesFont, serif';

export const fontFamilyTitle = "'Bebas Neue', sans-serif";
