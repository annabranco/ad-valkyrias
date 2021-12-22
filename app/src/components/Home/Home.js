import React from 'react';
import { OpeningImage, OpeningImageDevices, OpeningMessage } from '../../assets/images';
import { HomeWrapper, MainImage, MainImageDevices, MainMessage } from './Home.styles';

const Home = () => (
  <HomeWrapper>
    <MainImage src={OpeningImage} />
    <MainImageDevices src={OpeningImageDevices} />
    <MainMessage src={OpeningMessage} />
  </HomeWrapper>
);

export default Home;
