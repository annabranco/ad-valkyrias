import React from 'react';
import { connect } from 'frontity';

import { Logo } from '../../../assets/images';
import { City, HomeContainer, HomeLogo, HomeTitle, SocialWrapper, TitleWrapper } from './MainBanner.styles';
import Link from '../../core/Link/LinkComponent';
import SocialLink from '../../sharedElements/SocialLink/SocialLink';
import { INSTAGRAM } from '../../../constants/social';

const MainBanner = () => (
  <HomeContainer>
    <Link link="/home">
      <HomeLogo
        src={Logo}
        alt="Escudo de la Asociación Deportiva Valkyrias. El escudo es un círculo con gruesos bordes negros, donde se ve una cadena enlazada en estilo nórdico antiguo. Dentro del círculo y ocupando todo su espacio hay el rostro frontal de una valquiria con casco y pintura de batalla. Del casco salen dos alas que se proyectan para fuera del círculo. Por detrás de la valquiria, al fondo, hay un arco iris. Circundando la valquiria, hay tres balones de fútbol, una en cada borde lateral y superior del círculo que da forma al escudo. En la parte inferior del círculo está escrito el nombre VALKYRIAS."
      />
    </Link>
    <TitleWrapper>
      <HomeTitle>
        Asociación Deportiva <span>Valkyrias</span>
      </HomeTitle>
      <City>Madrid</City>
      <SocialWrapper>
        <SocialLink link="https://www.instagram.com/ad-valkyrias" type={INSTAGRAM} />
      </SocialWrapper>
    </TitleWrapper>
  </HomeContainer>
);

export default connect(MainBanner);
