import React from "react";
import { Logo } from "../../../assets/images";
import { City, HomeContainer, HomeLogo, HomeTitle } from "./MainBanner.styles";

const MainBanner = () => (
  <HomeContainer>
    <HomeLogo src={Logo} alt="A.D. Valkyrias shield" />
    <div>
      <HomeTitle>
        Asociación Deportiva <span>Valkyrias</span>
      </HomeTitle>
      <City>Madrid</City>
    </div>
  </HomeContainer>
);

export default MainBanner;
