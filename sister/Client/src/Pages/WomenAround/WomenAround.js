import React, { Component } from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';
import './style.css';
import chica4 from "./../../Components/Images/chica4.jpg"


function WomanA(){
    return(

      <div>
        
        <Container className="containerRow">
  <Row className="cRow">
    <Col >
      <Image className="facePic" src={chica4} rounded />
    </Col>
    <Col className="listInfo">
                 <p  className="cardFont">
                   Name:<br />
                   Emergency button was press: <br />
                   Location close to: <br />
                   Extact Location:<br />
                   Contact Her:<br />
                 </p>
     </Col>
   
  </Row>
</Container>
       
      </div>


    );
}

export default WomanA;