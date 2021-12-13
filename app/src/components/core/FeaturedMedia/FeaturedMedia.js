import { connect } from "frontity";
import { Container, StyledImage } from "./FeaturedMedia.styles";

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      .map((item) => [item.source_url, item.width])
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container isAmp={state.frontity.mode === "amp"}>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);
