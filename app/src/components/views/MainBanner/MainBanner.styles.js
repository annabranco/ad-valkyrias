import { styled } from "frontity";
import Link from "../../core/Link/LinkComponent";

export const HomeContainer = styled.div`
  z-index: 4;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(145, 236, 168, 0.4)
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 20vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  box-sizing: border-box;
  box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
  padding-top: 10vh;
`;
HomeContainer.displayName = "HomeContainer";

export const HomeLogo = styled.img`
  position: relative;
  z-index: 3;
  width: 250px;
  height: 250px;
`;
HomeLogo.displayName = "HomeLogo";

export const HomeTitle = styled.h1`
  text-shadow: 0 0 2px white;
  line-height: 1.5;
  color: black;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.8rem;
  font-weight: 200;
  line-height: 0.9;
  color: #a8c9a7;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  & > span {
    color: darkgreen;
    font-size: 4rem;
    font-weight: 600;
  }
`;
HomeTitle.displayName = "HomeTitle";

export const AuthorInfo = styled.p`
  color: white;
  font-size: 0.9rem;
  font-family: "Barlow", sans-serif;
  text-shadow: 0 0 1px black;
`;
AuthorInfo.displayName = "AuthorInfo";

export const City = styled.p`
  color: crimson;
  font-size: 1rem;
  font-family: "Bebas Neue", sans-serif;
  text-shadow: 0 0 1px black;
  text-transform: uppercase;
  margin-top: -20px;
  letter-spacing: 5px;
  text-align: center;
  opacity: 0.7;
`;
City.displayName = "City";

export const StyledLink = styled(Link)`
  font-size: 1rem;
  &:hover {
    color: yellow;
  }
`;
StyledLink.displayName = "StyledLink";
