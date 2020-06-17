import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from "gatsby"



const Footer = () => {
    return (  
      <Navbar  className="navbar navbar-expand-lg  navbar-dark bg-kwesiblack " collapseOnSelect
      expand="lg" fixed="bottom">
      <Navbar.Brand as={Link} to="/">Kwesiblack</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        {/* <Nav.Link as={Link} to="recent">Recent</Nav.Link> */}
        <Nav.Link as={Link} to="bw">Monochrome</Nav.Link>
        <Nav.Link as={Link} to="cl">Color</Nav.Link>
        
        
        
      </Nav>
      <Nav className="ml-auto">
    <Nav.Link>Copyright 2020 kwesiblack.com</Nav.Link>
    </Nav>
      </Navbar.Collapse>
    </Navbar>
   );
}
 
export default Footer;