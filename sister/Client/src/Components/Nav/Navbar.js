import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import './style.css';



function NavBar(){
  const history = useHistory();
  console.log(history)
 
   return(

      <div>
        {history.location.pathname!== "/" ?(
      <Container className="Nav">
       
        <Navbar className="menubar">
       
        <Nav className="mr-auto">
         <Nav.Link className="round-button" href="/Home">Home </Nav.Link>
       
         <Nav.Link className="round-button" href="/StaySafe">Stay Safe </Nav.Link>
       
         <Nav.Link className="round-button" href="/WomanAround">Sisters around me </Nav.Link>
       
         <Nav.Link className="round-button" href="/Profile">Profile</Nav.Link>
       
       </Nav>
        </Navbar>
     </Container>
     ):<></>}
       </div>
    

   )
}

export default NavBar;