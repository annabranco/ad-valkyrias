import React from 'react';
import { FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE, EMAIL } from '../../../constants/social';
import { string, func } from 'prop-types';
import { SocialLinkButton, SocialLogo } from './SocialLink.styles';

const SocialLink = ({ link = '', onClick, type }) => {
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
    <SocialLinkButton href={link} rel="noreferrer" target="_blank" type={type}>
      <SocialLogo onClick={onClick} icon={['fab', icon]} type={type} />
    </SocialLinkButton>
  );
};

SocialLink.propTypes = {
  link: string.isRequired,
  onClick: func,
  type: string.isRequired,
};

SocialLink.defaultProps = {
  onClick: () => null,
};

export default SocialLink;
