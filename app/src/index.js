import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import link from '@frontity/html2react/processors/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import Main from './components/Main/Main';
import { players, player } from './utils/handlers';

library.add(fab, faEnvelope, faFutbol);

const before = async ({ libraries, actions }) => {
  libraries.html2react.processors.push(image);
  libraries.source.handlers.push(players, player);
  await actions.source.fetch('/senior');
};

const App = {
  name: 'app',
  roots: {
    theme: Main,
  },
  state: {
    theme: {
      autoPrefetch: 'in-view',
      menu: [],
      isMobileMenuOpen: false,
    },
    players: null,
  },

  actions: {
    players: {
      updatePlayers:
        ({ state }) =>
        updatedPlayers => {
          state.players = updatedPlayers.updatedPlayers || updatedPlayers;
        },
    },
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: before,
      beforeCSR: before,
    },
  },
  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
  },
};

export default App;
