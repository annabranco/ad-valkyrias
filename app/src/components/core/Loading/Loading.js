import { css } from "frontity";
import { Bar, LoadingContainer } from "./Loading.styles";

const Loading = () => (
  <LoadingContainer>
    <div>
      <div css={Bar(1)} />
      <div css={Bar(2)} />
      <div css={Bar(3)} />
      <div css={Bar(4)} />
      <div css={Bar(5)} />
    </div>
  </LoadingContainer>
);

export default Loading;
