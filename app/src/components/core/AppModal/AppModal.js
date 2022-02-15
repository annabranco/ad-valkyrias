import { connect, useConnect } from 'frontity';
import Link from '../Link/LinkComponent';
import ChangeLanguageButton from '../../views/ChangeLanguageButton/ChangeLanguageButton';
import ViewControllerLayer from '../../views/ViewControllerLayer/ViewControllerLayer';
import { Logo } from '../../../assets/images';
import {
  MenuOverlay,
  MenuContent,
  ModalTitle,
  MenuLink,
  ModalLogo,
  ModalTitleWrapper,
  NavWrapper,
  LanguagesButtonWrapper,
} from './AppModal.styles';

const AppModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;
  const isThereLinks = menu?.length > 0;

  return (
    <div {...props}>
      {/* <ViewControllerLayer /> */}
      {state.frontity.mode !== 'amp' && <MenuOverlay />}
      <MenuContent as="nav">
        <ModalTitleWrapper>
          <ModalTitle>U.D. Valkyrias</ModalTitle>
          <Link link="/home">
            <ModalLogo
              src={Logo}
              alt="Escudo de la Unión Deportiva Valkyrias. El escudo es un círculo con gruesos bordes negros, donde se ve una cadena enlazada en estilo nórdico antiguo. Dentro del círculo y ocupando todo su espacio hay el rostro frontal de una valquiria con casco y pintura de batalla. Del casco salen dos alas que se proyectan para fuera del círculo. Por detrás de la valquiria, al fondo, hay un arco iris. Circundando la valquiria, hay tres balones de fútbol, una en cada borde lateral y superior del círculo que da forma al escudo. En la parte inferior del círculo está escrito el nombre VALKYRIAS."
            />
          </Link>
        </ModalTitleWrapper>
        <NavWrapper>
          {isThereLinks &&
            menu.map(([name, link]) => (
              <MenuLink key={name} link={link} aria-current={state.router.link === link ? 'page' : undefined}>
                {name}
              </MenuLink>
            ))}
        </NavWrapper>
        <LanguagesButtonWrapper>
          <ChangeLanguageButton />
        </LanguagesButtonWrapper>
      </MenuContent>
    </div>
  );
};

export default connect(AppModal, { injectProps: false });
