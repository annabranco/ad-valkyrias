import { css } from 'frontity';
import RunesFont from '../assets/comic-runes.ttf';

export const fontFamilyMainTitle = 'RunesFont, serif';
export const fontFamilyTitle = "'Bebas Neue', sans-serif";
export const fontFamilyText = "'Barlow', sans-serif";

export const colorPrimary = '#006400';
export const colorPrimaryDark = '#014421';
export const colorPrimaryLight = '#a8c9a7';
export const colorSecondary = '#f0ffff';
export const colorTerciary = '#100c08';
export const colorTextsSoft = 'rgba(12, 17, 43, 0.9)';
export const colorHighlight = '#8ae600';

export const fontSizeHuge = '4rem';
export const fontSizeXLarge = '2.5rem';
export const fontSizeLarge = '2rem';
export const fontSizeBigger = '1.8rem';
export const fontSizeBig = '1.3rem';
export const fontSizeNormal = '1rem';
export const fontSizeSmall = '0.9rem';
export const fontSizeXSmall = '0.7rem';

export const darkGradientOverlay = css`
  background-image: linear-gradient(to bottom, #004d00, #3cb371);
`;

export const darkGradientBar = css`
  background-image: linear-gradient(to left, #004d00, #3cb371);
`;

export const darkGradientBarLight = css`
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(145, 236, 168, 0.4));
`;

export const gradientBackgroundDevices = css`
  background-image: linear-gradient(
    to bottom,
    rgba(5, 73, 9, 0.7),
    rgba(5, 73, 9, 0.5),
    rgba(172, 233, 175, 0.7),
    rgba(172, 233, 175, 0.3),
    white,
    white,
    white
  );
`;

export const gradientBackgroundDesktop = css`
  background-image: linear-gradient(to bottom, rgba(5, 73, 9, 0.25), rgba(172, 233, 175, 0.2), white, white);
`;

export const gradientMainBackground = css`
  background-image: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.1),
    rgba(100, 100, 100, 0.02),
    rgba(100, 100, 100, 0.01)
  );
`;

export const globalStyles = css`
  @font-face {
    font-family: RunesFont;
    src: url(${RunesFont});
  }

  body {
    margin: 0;
    font-family: ${fontFamilyText};
    overflow: auto;
    color: ${colorTextsSoft};
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
  h1 {
    font-family: ${fontFamilyMainTitle};
  }
  h1,
  h2,
  h3 {
    font-family: ${fontFamilyTitle};
  }
`;
