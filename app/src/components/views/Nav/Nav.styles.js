import { styled } from 'frontity';
import { fontFamilyTitle } from '../../../config/globalStyles';

export const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 80%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;
NavContainer.displayName = 'NavContainer';

export const NavItem = styled.div`
  padding: 0;
  margin: 0 20px;
  color: #fff;
  font-size: 1.2rem;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    &[aria-current='page'] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: '';
      display: inline-block;
      width: 24px;
    }
  }
`;
NavItem.displayName = 'NavItem';
