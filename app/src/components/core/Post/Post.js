import { useEffect } from "react";
import { connect } from "frontity";
import List from "../List";
import FeaturedMedia from "../FeaturedMedia/FeaturedMedia";
import {
  PostWrapper,
  Title,
  StyledLink,
  Author,
  DateWrapper,
  Content,
} from "./Post.styles";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <PostWrapper>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {!data.isPage && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            {!data.isPlayer && !data.isPlayersPage && (
              <DateWrapper>
                <b>{date.toDateString()}</b>
              </DateWrapper>
            )}
          </div>
        )}
      </div>

      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </PostWrapper>
  ) : null;
};

export default connect(Post);
