import { styled } from 'frontity';
import Link from '../Link/LinkComponent';

export const Title = styled.h1`
  margin: 50px 0 0;
  min-height: 25px;
  height: auto;
  width: 90%;
  padding-top: 24px 0 8px 40px;
  box-sizing: border-box;
  background: rgba(50, 205, 50, 0.15);
  border-radius: 0 35px 35px 0;
  font-size: 2rem;
  color: darkgreen;
  line-height: 1;
`;
Title.displayName = 'Title';

export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;
AuthorName.displayName = 'AuthorName';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;
PublishDate.displayName = 'PublishDate';

export const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  text-align: justify;
`;
Excerpt.displayName = 'Excerpt';

export const ListContainer = styled.section`
  width: 100%;
  margin: 0;
  padding: 24px;
  list-style: none;

  @media all and (min-width: 768px) {
    /* width: 800px; */
  }
`;
ListContainer.displayName = 'ListContainer';

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
Header.displayName = 'Header';

export const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;
Text.displayName = 'Text';
