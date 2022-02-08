import { connect } from "frontity";
import { Photo404 } from "../../../assets/images";
import TEXTS from '../../../db/error';

import {
  ErrorWrapper,
  Description,
  Image,
  Title,
} from "./ErrorComponent.styles";

const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { language = 'en' } = state.theme;

  return (
    <ErrorWrapper>
      <Title>{data.is404 ? TEXTS[language].title404 : TEXTS[language].title}</Title>
      <Description>{data.is404 ? TEXTS[language].description404 : TEXTS[language].description}</Description>
      <Image src={Photo404} />
    </ErrorWrapper>
  );
};

export default connect(Page404);
