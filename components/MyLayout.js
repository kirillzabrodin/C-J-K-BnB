import Header from './Header';
import React from "react";
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const title = "Welcome to MakersBnB";
    const { children } = this.props;
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MakersBnB</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/login">Log in</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/spaces">Spaces</NavLink>
                </NavItem>
                </Nav>
          </Collapse>
        </Navbar>
        <Container>{children}</Container>
      </div>

    )
  }
}

export default Layout
