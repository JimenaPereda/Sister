import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Logo from "./../Images/SISTER.png"
import './style.css';



function NavBar(){
  const history = useHistory();
  console.log(history)
 
   return(

      <div>
        {history.location.pathname!== "/"&&(
      <Container className="Nav">
        <div className="imgLogo">
       <img src={Logo} alt="" width="130" height="70"/>
    </div>
        <Navbar className="menubar">
        <Nav className="mr-auto">
         <Nav.Link className="round-button" href="/Home">Home |</Nav.Link>
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
     )}
       </div>
    

   )
}

export default NavBar;