import { connect } from "frontity";
import Nav from "../Nav/Nav";
import MobileMenu from "../../core/MobileMenu/menu";
import { Container, Title } from "./Header.styles";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Title>Valkyrias</Title>
        <MobileMenu />
        {/* <SmallLogo src={IconMedium} alt="Valkyrias logo" /> */}
      </Container>
      <Nav />
    </>
  );
};

export default connect(Header);
