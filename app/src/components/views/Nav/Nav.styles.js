import { styled, css } from 'frontity';
import { colorHighlight, colorPrimaryLight, colorSecondary, fontSizeBig } from '../../../config/globalStyles';
import Link from '../../core/Link/LinkComponent';

export const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 80%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0 0 0 100px;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;
NavContainer.displayName = 'NavContainer';

export const NavItem = styled.div`
  padding: 0;
  margin: 0 20px;
  color: ${colorSecondary};
  font-size: ${fontSizeBig};
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    &[aria-current='page'] {
      border-bottom-color: ${colorSecondary};
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

export const NavLink = styled(Link)`
  transition: all 0.2s ease;

  ${({ active }) =>
    active === 'true' &&
    css`
      color: ${colorPrimaryLight} !important;
      font-weight: 300;
      border-bottom: 0 !important;
      transform: translate(0, -3px);
      zoom: 1.1;
      transition: all 0.5s ease;
    `}
`;
