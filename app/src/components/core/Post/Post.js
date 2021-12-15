import { useEffect } from 'react';
import { connect } from 'frontity';
import List from '../List';
import FeaturedMedia from '../FeaturedMedia/FeaturedMedia';
import { PostWrapper, Title, StyledLink, Author, DateWrapper, Content } from './Post.styles';

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  console.log('$$$ data', data);

  const post = state.source[data.type][data.id];
  console.log('$$$ post', post);

  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch('/');
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <PostWrapper>
      <div>
        <Title
          dangerouslySetInnerHTML={{ __html: data.isPlayer ? post.title.rendered.toUpperCase() : post.title.rendered }}
          isPlayer={data.isPlayer}
        />

        {!data.isPage && (
          <div>
            {!data.isPlayer && !data.isPlayersPage && (
              <DateWrapper>
                <b>{date.toDateString()}</b>
              </DateWrapper>
            )}
          </div>
        )}
      </div>

      {state.theme.featured.showOnPost && <FeaturedMedia id={post.featured_media} />}

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        <Content isPlayer={data.isPlayer}>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </PostWrapper>
  ) : null;
};

export default connect(Post);
