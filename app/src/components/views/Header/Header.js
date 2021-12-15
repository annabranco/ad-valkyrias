import { connect } from 'frontity';
import Nav from '../Nav/Nav';
import MobileMenu from '../../core/MobileMenu/menu';
import { Logo } from '../../../assets/images';
import { HeaderSection, HeaderLogo, Title } from './Header.styles';

const Header = ({ state }) => {
  return (
    <>
      <HeaderSection>
        <Title>Valkyrias</Title>
        <MobileMenu />
        <HeaderLogo src={Logo} alt="Valkyrias logo" />
      </HeaderSection>
      <Nav />
    </>
  );
};

export default connect(Header);
