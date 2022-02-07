import React from 'react';
import { func, oneOf, string } from 'prop-types';

import { MAIN, MAIN_DEVICES, PLAYER } from '../../../constants/global';
import { EMAIL, FACEBOOK, INSTAGRAM, TWITTER, YOUTUBE } from '../../../constants/social';
import { SocialLinkButton, SocialLogo } from './SocialLink.styles';

const SocialLink = ({ link = '', onClick, place, type }) => {
  let icon;
  switch (type) {
    case FACEBOOK:
      icon = 'facebook-f';
      break;
    case TWITTER:
      icon = 'twitter';
      break;
    case INSTAGRAM:
      icon = 'instagram';
      break;
    case YOUTUBE:
      icon = 'youtube';
      break;
    case EMAIL:
      icon = 'envelope';
      break;
    default:
      break;
  }

  return (
    <SocialLinkButton href={link} place={place} rel="noreferrer" target="_blank" type={type}>
      <SocialLogo icon={['fab', icon]} onClick={onClick} place={place} type={type} />
    </SocialLinkButton>
  );
};

SocialLink.propTypes = {
  link: string.isRequired,
  onClick: func,
  place: oneOf([MAIN, MAIN_DEVICES, PLAYER]).isRequired,
  type: string.isRequired,
};

SocialLink.defaultProps = {
  onClick: () => null,
};

export default SocialLink;
