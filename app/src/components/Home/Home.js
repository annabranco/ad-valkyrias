import React from 'react';
import { OpeningImage } from '../../assets/images';
import { MAIN_DEVICES } from '../../constants/global';
import { FACEBOOK, INSTAGRAM, YOUTUBE } from '../../constants/social';
import SocialLink from '../sharedElements/SocialLink/SocialLink';
import { Email, SocialWrapperDevices } from '../views/MainBanner/MainBanner.styles';
import { HomeWrapper, MainImage } from './Home.styles';

const Home = () => (
  <HomeWrapper>
    <MainImage src={OpeningImage} />
    <SocialWrapperDevices>
      <SocialLink link="https://www.instagram.com/ud.valkyrias" place={MAIN_DEVICES} type={INSTAGRAM} />
      <SocialLink link="https://www.facebook.com/ud.valkyrias" place={MAIN_DEVICES} type={FACEBOOK} />
      <SocialLink link="http://www.youtube.com/channel/UC6zrBRmvXQEYdaSyKkc9YxA" place={MAIN_DEVICES} type={YOUTUBE} />
      <Email>valkyrias@valkyrias.eu</Email>
    </SocialWrapperDevices>
  </HomeWrapper>
);

export default Home;
