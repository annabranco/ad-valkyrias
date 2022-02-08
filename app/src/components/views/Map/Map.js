import React from 'react';
import { connect } from 'frontity';

import Link from '../../core/Link/LinkComponent';
import TEXT from '../../../db/location';
import { MapComponentText, MapFrame } from './Map.styles';

const BASE_URL = 'https://www.google.com/maps/embed';
const MAP_URL =
  'pb=!1m14!1m8!1m3!1d12136.480038104834!2d-3.695032!3d40.4947292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd761dc7ee949338!2sAsociaci%C3%B3n%20Deportiva%20Valkyrias!5e0!3m2!1sen!2ses!4v1641547184872!5m2!1sen!2ses';

const MapComponent = ({ state }) => {
  const { language } = state.theme;

  const formattedText = () =>
    TEXT[language]
      .replace('our calendar', '<span><a href="/calendario">our calendar</a></span>')
      .replace('nuestro calendario', '<span><a href="/calendario">nuestro calendario</a></span>');

  return (
    <>
      <MapComponentText dangerouslySetInnerHTML={{__html: formattedText()}} />
      <MapFrame src={`${BASE_URL}?${MAP_URL}`} frameBorder="0" allowfullscreen="" loading="lazy" scrolling="no" />
    </>
  );
};

export default connect(MapComponent);
