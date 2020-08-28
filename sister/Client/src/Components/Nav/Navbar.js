import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import './style.css';



function NavBar(){
   return(
    <div>
   <Container className="Nav">
     <Navbar className="menubar">
     <Nav className="mr-auto">
      <Nav.Link className="round-button" href="/">Home |</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/StaySafe">Stay Safe |</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/WomanAround">Woman around me |</Nav.Link>
      <div className="divider" ></div>
      <Nav.Link className="round-button" href="/Profile">Profile</Nav.Link>
      <div className="divider" ></div>
    </Nav>
     </Navbar>
  </Container>
    </div>

   )
}

export default NavBar;