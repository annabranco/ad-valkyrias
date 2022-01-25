import { useEffect } from 'react';
import { connect } from 'frontity';
import List from '../List';
import FeaturedMedia from '../FeaturedMedia/FeaturedMedia';
import { PostWrapper, Title, StyledLink, Author, DateWrapper, Content } from './Post.styles';

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch('/');
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <PostWrapper>
      {!data.isPage && (
        <div>
          {!data.isPlayersPage && (
            <Title
              dangerouslySetInnerHTML={{
                __html: data.isPlayer ? post.title.rendered.toUpperCase() : post.title.rendered,
              }}
              isPlayer={data.isPlayer}
            />
          )}

          <div>
            {!data.isPlayer && !data.isPlayersPage && (
              <DateWrapper>
                <b>{date.toDateString()}</b>
              </DateWrapper>
            )}
          </div>
        </div>
      )}

      {state.theme.featured.showOnPost && <FeaturedMedia id={post.featured_media} />}

      {data.isAttachment ? (
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        <Content isPlayer={data.isPlayer} isPost={data.isPost} isSeniorPage={data.route === '/senior/'}>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </PostWrapper>
  ) : null;
};

export default connect(Post);
