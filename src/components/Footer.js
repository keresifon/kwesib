import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'



const Footer = () => {
    return (  
    <Navbar  className="navbar navbar-expand-lg  navbar-dark bgf-kwesiblack " collapseOnSelect
    expand="lg" fixed ="bottom">
    
    <Nav className="mr-auto">
      <Nav.Link href="/">Copyright 2020 kwesiblack.com</Nav.Link>
      
    </Nav>
    
  </Navbar> );
}
 
export default Footer;