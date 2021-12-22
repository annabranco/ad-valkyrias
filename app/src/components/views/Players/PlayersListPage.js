import React from 'react';
import { node } from 'prop-types';
import PlayersList from './PlayersList/PlayersList';

const PlayersListPage = ({ children }) => (
  <>
    {children}
    <PlayersList />
  </>
);

PlayersListPage.propTypes = {
  children: node.isRequired,
};

export default PlayersListPage;
