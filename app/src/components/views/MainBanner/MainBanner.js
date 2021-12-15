import React from "react";
import { connect } from "frontity";

import { Logo } from "../../../assets/images";
import {
  City,
  HomeContainer,
  HomeLogo,
  HomeTitle,
  TitleWrapper,
} from "./MainBanner.styles";

const MainBanner = () => (
  <HomeContainer>
    <HomeLogo src={Logo} alt="A.D. Valkyrias shield" />
    <TitleWrapper>
      <HomeTitle>
        Asociación Deportiva <span>Valkyrias</span>
      </HomeTitle>
      <City>Madrid</City>
    </TitleWrapper>
  </HomeContainer>
);

export default connect(MainBanner);
