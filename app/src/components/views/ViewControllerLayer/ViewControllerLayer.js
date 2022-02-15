import React from 'react';
import { Logo } from '../../../assets/images';
import { ModalLogo, ModalTitle } from '../../core/AppModal/AppModal.styles';
import { Screen } from './ViewControllerLayer.styles';

const ViewControllerLayer = () => (
  <Screen>
    <ModalTitle>U.D. Valkyrias</ModalTitle>
    <ModalLogo
      src={Logo}
      alt="Escudo de la Unión Deportiva Valkyrias. El escudo es un círculo con gruesos bordes negros, donde se ve una cadena enlazada en estilo nórdico antiguo. Dentro del círculo y ocupando todo su espacio hay el rostro frontal de una valquiria con casco y pintura de batalla. Del casco salen dos alas que se proyectan para fuera del círculo. Por detrás de la valquiria, al fondo, hay un arco iris. Circundando la valquiria, hay tres balones de fútbol, una en cada borde lateral y superior del círculo que da forma al escudo. En la parte inferior del círculo está escrito el nombre VALKYRIAS."
    />
  </Screen>
);

export default ViewControllerLayer;
