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
    <Nav.Link as={Link} to="/" activeClassName="active" >Home</Nav.Link>
    <Nav.Link as={Link} to="recent">Recent</Nav.Link>
    <Nav.Link as={Link} to="bw" activeClassName="active">Monochrome</Nav.Link>
    <Nav.Link as={Link} to="cl" activeClassName="active">Color</Nav.Link>
    
    
    
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
