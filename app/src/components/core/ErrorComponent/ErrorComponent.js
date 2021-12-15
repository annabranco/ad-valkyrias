import { connect } from "frontity";
import { Photo404 } from "../../../assets/images";
import {
  ErrorWrapper,
  Description,
  Image,
  Title,
} from "./ErrorComponent.styles";

const description404 = (
  <>
    The page you are looking for does not exist or has been moved. Please use
    the menu to navigate
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. Please try refreshing
    your browser.
  </>
);

const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "How embarassing...";
  const title404 = "Oh-nooo! 404";

  return (
    <ErrorWrapper>
      <Title>{data.is404 ? title404 : title}</Title>
      <Description>{data.is404 ? description404 : description}</Description>
      <Image src={Photo404} />
    </ErrorWrapper>
  );
};

export default connect(Page404);
