import { connect } from 'frontity';
import Nav from '../Nav/Nav';
import MobileMenu from '../../core/MobileMenu/menu';
import Link from '../../core/Link/LinkComponent';
import { Logo } from '../../../assets/images';
import { HeaderSection, HeaderLogo, Title } from './Header.styles';

const Header = ({ state }) => {
  return (
    <>
      <HeaderSection>
        <Link link="/home">
          <Title>Valkyrias</Title>
        </Link>
        <MobileMenu />
        <Link link="/home">
          <HeaderLogo src={Logo} alt="Valkyrias logo" />
        </Link>
      </HeaderSection>
      <Nav />
    </>
  );
};

export default connect(Header);
