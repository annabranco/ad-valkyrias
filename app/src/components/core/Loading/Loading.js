import { css } from "frontity";
import { Bar, Container } from "./Loading.styles";

const Loading = () => (
  <Container>
    <div>
      <div css={Bar(1)} />
      <div css={Bar(2)} />
      <div css={Bar(3)} />
      <div css={Bar(4)} />
      <div css={Bar(5)} />
    </div>
  </Container>
);

export default Loading;
