import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import IconMedium from "../assets/images/shield/valkyrias-icon-big.png";

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

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  color: black;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  height: 10px;
`;

const Title = styled.h2`
  position: absolute;
  right: 2vw;
  top: -40px;
  font-family: RunesFont;
  font-size: 3rem;
  color: white;
  opacity: 0.1;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LoginButton = styled.div`
  background-image: linear-gradient(to left, gray, lightgray);
  width: 120px;
  border: 1px solid black;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  cursor: pointer;
  color: darkred;
  text-shadow: 1px 1px 1px black;
  &:hover {
    color: gold;
  }
`;

const SmallLogo = styled.img`
  margin-top: 10px;
  height: 40px;
  width: 40px;
  opacity: 0.8;
`;
