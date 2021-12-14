import { css } from "frontity";
import RunesFont from "../assets/comic-runes.ttf";

export const globalStyles = css`
  @font-face {
    font-family: RunesFont;
    src: url(${RunesFont});
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow: auto;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
