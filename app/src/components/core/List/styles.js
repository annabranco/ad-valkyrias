import { styled } from 'frontity';
import Link from '../Link/LinkComponent';

export const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
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
