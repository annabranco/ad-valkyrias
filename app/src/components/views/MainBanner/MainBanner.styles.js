import { styled } from "frontity";
import Link from "../../core/Link/LinkComponent";

export const HomeContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 50px;
  left: 0;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(145, 236, 168, 0.4)
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 30px;
  width: 100%;
  padding: 30px 10px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);

  @media all and (min-width: 768px) {
    position: fixed;
    z-index: 4;
    padding: 10vh 0 0;
    bottom: unset;
    left: unset;
    height: 100%;
    width: 20vw;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
HomeContainer.displayName = "HomeContainer";

export const HomeLogo = styled.img`
  display: none;

  @media all and (min-width: 768px) {
    z-index: 3;
    display: block;
    width: 250px;
    height: 250px;
    margin-bottom: 100px;
  }
`;
HomeLogo.displayName = "HomeLogo";

export const HomeTitle = styled.h1`
  margin-top: 0;
  line-height: 5px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.3em;
  font-weight: 400;
  line-height: 0.9;
  color: #a8c9a7;

  & > span {
    font-size: 1.3rem;
    font-weight: 400;
  }

  @media all and (min-width: 768px) {
    display: initial;
    font-size: 1.8rem;
    line-height: 0.8;
    margin-top: 0;
    font-weight: 200;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    & > span {
      color: darkgreen;
      font-size: 4rem;
      font-weight: 600;
      margin-left: 0;
      vertical-align: initial;
    }
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
  font-size: 0.8rem;
  font-family: "Bebas Neue", sans-serif;
  text-shadow: 0 0 1px black;
  text-transform: uppercase;
  margin-top: -18px;
  text-align: center;
  opacity: 0.7;

  @media all and (min-width: 768px) {
    margin-top: -20px;
    font-size: 1rem;
    letter-spacing: 5px;
  }
`;
City.displayName = "City";

export const StyledLink = styled(Link)`
  font-size: 1rem;
  &:hover {
    color: yellow;
  }
`;
StyledLink.displayName = "StyledLink";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ;
  width: 100%;

  @media all and (min-width: 768px) {
    align-items: center;
  }
`;
TitleWrapper.displayName = "TitleWrapper";
