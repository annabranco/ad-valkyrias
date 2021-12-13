import { connect } from "frontity";
import Link from "../../core/Link/LinkComponent";
import { NavContainer, NavItem } from "./Nav.styles";

const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      const data = state.source.get(state.router.link);
      const isCurrentPage = data.route === link;

      return (
        <NavItem key={name}>
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);
