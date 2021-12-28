import React from 'react';
import { OpeningImage, OpeningImageDevices } from '../../assets/images';
import { HomeWrapper, MainImage, MainImageDevices } from './Home.styles';

const Home = () => (
  <HomeWrapper>
    <MainImage src={OpeningImage} />
    <MainImageDevices src={OpeningImageDevices} />
  </HomeWrapper>
);

export default Home;
