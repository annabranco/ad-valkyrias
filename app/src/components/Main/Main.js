import React from 'react';
import { Global, connect, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import List from '../core/List';
import ErrorPage from '../core/ErrorComponent/ErrorComponent';
import Loading from '../core/Loading/Loading';
import Post from '../core/Post/Post';
import Header from '../views/Header/Header';
import MainBanner from '../views/MainBanner/MainBanner';
import { IconMedium, IconSmall, IconTiny } from '../../assets/images';
import { ScreenArea, HeadContainer, Body, MainArea } from './Main.styles';
import { globalStyles } from '../../config/globalStyles';
import PlayersPage from '../views/Players/PlayersPage';
import PlayersListPage from '../views/Players/PlayersListPage';
import Home from '../Home/Home';
import Calendar from '../views/Calendar/Calendar';
import MapComponent from '../views/Map/Map';

const Main = ({ state, actions }) => {
  const renderMainPage = () => {
    const data = state.source.get(state.router.link);

    return (
      <>
        <Head>
          <title>{state.frontity.title}</title>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" class="notranslate" translate="no" />
          <link
            href="https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href={IconMedium} />
          <link rel="icon" type="image/png" href={IconTiny} sizes="16x16" />
          <link rel="icon" type="image/png" href={IconSmall} sizes="32x32" />
          <link rel="icon" type="image/png" href={IconMedium} sizes="64x64" />
          <link rel="shortcut icon" type="image/png" href={IconMedium} sizes="192x192" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;700"
            rel="stylesheet"
          />
          <meta name="google" content="notranslate" />
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
                <PlayersListPage when={data.isPlayersPage}>
                  <Post />
                </PlayersListPage>
                <List when={data.isArchive} />
                <Post when={data.isPostType} />
                <PlayersPage when={data.isPlayer} />
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
