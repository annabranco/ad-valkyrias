import React, { useEffect } from 'react';
import { Global, connect, Head } from 'frontity';
import Switch from '@frontity/components/switch';

import Calendar from '../views/Calendar/Calendar';
import ErrorPage from '../core/ErrorComponent/ErrorComponent';
import Header from '../views/Header/Header';
import Home from '../Home/Home';
import List from '../core/List';
import Loading from '../core/Loading/Loading';
import MainBanner from '../views/MainBanner/MainBanner';
import MapComponent from '../views/Map/Map';
import PlayerInfo from '../views/Players/PlayerInfo/PlayerInfo';
import PlayersListPage from '../views/Players/PlayersListPage';
import Post from '../core/Post/Post';

import { IconMedium, IconSmall, IconTiny } from '../../assets/images';
import { colorPrimary, globalStyles } from '../../config/globalStyles';
import { ScreenArea, HeadContainer, Body, MainArea } from './Main.styles';
import { LS_PREFERENCES_KEY } from '../../config/localStorage';

const Main = ({ state, actions }) => {
  const renderMainPage = () => {
    const data = state.source.get(state.router.link);
    const parsedNowISOString = new Date().toISOString();

    useEffect(() => {
      const { language } = JSON.parse(localStorage?.getItem(LS_PREFERENCES_KEY)) || { language: 'es' };
      if (state.theme.language !== language) {
        actions.theme.changeLanguage(language);
      }
    }, [])

    return (
      <>
        <Head>
          <title>{state.frontity.title}</title>
          <meta name="description" content={state.frontity.description} />
          <meta content="global" name="distribution" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

          <meta name="article:author" content="Unión Deportiva Valkyrias" />
          <meta name="lang" content="e2" />
          <meta name="theme-color" content={colorPrimary} />

          <meta name="DC.creator" content="Unión Deportiva Valkyrias" />
          <meta name="DC.description" lang="es" content={state.frontity.description} />
          <meta name="DC.date" scheme="W3CDTF" content={parsedNowISOString} />
          <meta name="DC.date.issue" content={parsedNowISOString} />
          <meta name="DC.language" scheme="RFC1766" content="es_ES" />
          <meta name="DC.publisher" content="Unión Deportiva Valkyrias" />
          <meta name="DC.subject" lang="es" content={state.frontity.description} />

          <meta name="date" scheme="W3CDTF" content={parsedNowISOString} />
          <meta itemProp="datePublished" content={parsedNowISOString} />
          <meta name="last-modified" content={parsedNowISOString} />
          <meta name="pageDate" content={parsedNowISOString} />
          <meta name="pageRender" content={parsedNowISOString} />

          <meta name="og:description" content={state.frontity.description} />
          <meta property="og:locale" content="es" />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="http://valkyrias.eu/" />
          <meta property="og:site_name" content="No Name Kitchen" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Unión Deportiva Valkyrias" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          <link rel="apple-touch-icon" href={IconMedium} />
          <link rel="icon" type="image/png" href={IconTiny} sizes="16x16" />
          <link rel="icon" type="image/png" href={IconSmall} sizes="32x32" />
          <link rel="icon" type="image/png" href={IconMedium} sizes="64x64" />
          <link rel="shortcut icon" type="image/png" href={IconMedium} sizes="192x192" />

          {/* <html lang="en" class="notranslate" translate="no" />
          <meta name="google" content="notranslate" /> */}

          <link
            href="https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap"
            rel="stylesheet"
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
            <MainBanner />
            <MainArea>
              <Switch>
                <Home when={data.link === '/home/'} />
                <Calendar when={data.link === '/calendario/'} />
                <MapComponent when={data.link === '/mapa/'} />
                <Loading when={data.isFetching} />
                <PlayersListPage when={data.isPlayersPage || data.isPlayer}>
                  {data.isPlayersPage ? <Post /> : <PlayerInfo />}
                  {/* <Post /> */}
                </PlayersListPage>
                <List when={data.isArchive} />
                <Post when={data.isPostType} />
                {/* <PlayersPage when={data.isPlayer} /> */}
                <ErrorPage when={data.isError} />
              </Switch>
            </MainArea>
          </Body>
        </ScreenArea>
      </>
    );
  };

  if (state.router.link === '/') {
    actions.router.set('/home');
    return renderMainPage();
  } else {
    return renderMainPage();
  }
};

export default connect(Main);
