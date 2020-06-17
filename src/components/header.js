import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => (
  <Navbar  className="navbar navbar-expand-lg  navbar-dark bg-kwesiblack " collapseOnSelect
  expand="lg" fixed="top">
  <Navbar.Brand as={Link} to="/">Kwesiblack</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse>
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="recent">Recent</Nav.Link>
    
    <NavDropdown title="Older" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="bw">Monochrome</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="cl">Color</NavDropdown.Item>
      </NavDropdown>
    
  </Nav>
  </Navbar.Collapse>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
