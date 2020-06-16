import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => (
  <Navbar  className="navbar navbar-expand-lg  navbar-dark bg-kwesiblack " collapseOnSelect
  expand="lg" fixed="top">
  <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse>
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <NavDropdown title="Commissioned" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="#action/3.1">Baby, Birthdays, Weddings</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.2">She Reads</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="brownscafe">Brown's Cafe</NavDropdown.Item>
      </NavDropdown>
    <NavDropdown title="Places" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="#action/3.1">Nigeria</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.2">USA</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.3">India</NavDropdown.Item>
      </NavDropdown>
    <NavDropdown title="Events" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="#action/3.1">Halloweein Preview</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.2">Lagos Carnival 2015</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.3">Lagos Carnival 2013</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.3">Lagos Carnival 2012</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.3">Event Mix</NavDropdown.Item>
      </NavDropdown>
    <NavDropdown title="People" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="#action/3.1">Close-up</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.2">The Kids</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="lmodels">Little Models</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="#action/3.3">Just People</NavDropdown.Item>
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
