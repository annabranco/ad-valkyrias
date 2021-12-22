import React from 'react';
import { string } from 'prop-types';
import { OpeningImage, OpeningImageDevices, OpeningMessage } from '../../assets/images';
import { HomeWrapper, MainImage, MainImageDevices, MainMessage } from './Home.styles';

const Home = () => (
  <HomeWrapper>
    <MainImage src={OpeningImage} />
    <MainImageDevices src={OpeningImageDevices} />
    <MainMessage src={OpeningMessage} />
  </HomeWrapper>
);

Home.propTypes = {
  key: string,
};

Home.defaultProps = {
  key: undefined,
};

export default Home;
