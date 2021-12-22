import { connect, useConnect } from 'frontity';
import { Logo } from '../../../assets/images';
import Link from '../Link/LinkComponent';
import {
  MenuOverlay,
  MenuContent,
  ModalTitle,
  MenuLink,
  ModalLogo,
  ModalTitleWrapper,
  NavWrapper,
} from './AppModal.styles';

const AppModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;
  const isThereLinks = menu?.length > 0;

  return (
    <div {...props}>
      {state.frontity.mode !== 'amp' && <MenuOverlay />}
      <MenuContent as="nav">
        <ModalTitleWrapper>
          <ModalTitle>A.D. Valkyrias</ModalTitle>
          <Link link="/home">
            <ModalLogo src={Logo} alt="Valkyrias logo" />
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
      </MenuContent>
    </div>
  );
};

export default connect(AppModal, { injectProps: false });
