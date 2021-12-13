/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { string, func } from "prop-types";
import { SocialLinkButton, SocialLogo } from "./SocialLink.styles";

const SocialLink = ({ link = "", onClick, type }) => {
  let icon;
  switch (type) {
    case "Facebook":
      icon = "facebook-f";
      break;
    case "Twitter":
      icon = "twitter";
      break;
    case "Instagram":
      icon = "instagram";
      break;
    case "Youtube":
      icon = "youtube";
      break;
    case "Email":
      icon = "envelope";
      break;
    default:
      break;
  }

  return (
    <SocialLinkButton href={link} rel="noreferrer" target="_blank">
      <SocialLogo onClick={onClick} icon={["fab", icon]} />
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
