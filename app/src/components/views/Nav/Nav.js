import { connect } from 'frontity';
import { NavContainer, NavItem, NavLink } from './Nav.styles';

const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      const data = state.source.get(state.router.link);
      const isCurrentPage = data.route === link;

      return (
        <NavItem key={name}>
          <NavLink active={isCurrentPage.toString()} link={link} aria-current={isCurrentPage ? 'page' : undefined}>
            {name}
          </NavLink>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);
