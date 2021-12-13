import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Players from "./Players";
import ErrorPage from "./page-error.js";
import Loading from "./loading";
import Home from "./Home";
import PlayersList from "./Players/playerList.js";
import RunesFont from "../assets/comic-runes.ttf";
import IconMedium from "../assets/images/shield/valkyrias-icon-big.png";
import IconSmall from "../assets/images/shield/valkyrias-icon-small.png";
import IconTiny from "../assets/images/shield/valkyrias-icon-tiny.png";

const globalStyles = css`
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

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href={IconMedium} />
        <link rel="icon" type="image/png" href={IconTiny} sizes="16x16" />
        <link rel="icon" type="image/png" href={IconSmall} sizes="32x32" />
        <link rel="icon" type="image/png" href={IconMedium} sizes="64x64" />
        <link
          rel="shortcut icon"
          type="image/png"
          href={IconMedium}
          sizes="192x192"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;700"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyles} />
      <ScreenArea>
        <HeadContainer>
          <Header />
        </HeadContainer>
        <Body>
          <Home />
          <Main>
            {data.isFetching && <Loading />}
            {data.isArchive && <List />}
            {data.isPostType && <Post />}
            {data.isPlayersPage && <PlayersList />}
            {data.isPlayer && (
              <>
                <Players />
                <PlayersList />
              </>
            )}
            {data.is404 && <ErrorPage />}
          </Main>
        </Body>
      </ScreenArea>
    </>
  );
};

export default connect(Theme);

const ScreenArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to left, #004d00, mediumseagreen);
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
  overscroll-behavior: none;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.1),
    rgba(100, 100, 100, 0.02),
    rgba(100, 100, 100, 0.01)
  );
  overscroll-behavior: contain;
  width: 95%;
`;

const Main = styled.div`
  margin: 50px 0 0 30%;
  width: 100%;
  overscroll-behavior: none;
`;
