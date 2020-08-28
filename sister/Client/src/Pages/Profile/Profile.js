import React, { Component } from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';
import './style.css';
import body from "./Images/body.jpg"
import face from "./Images/face.png"


function ProfilE(){
    return(
        <div>

              <h1 className="ProfileName">Name and Lastname</h1>
            <div  className="ProfDiv">
              <Row className="ProfileRow">
                  <Container className="ProfileCont1">
                      <Col className="ProfileImages">
                      <Image className="facePic" src={face}  width="300" height="300"/>
                      
                      <Image className="bodyPic" src={body}  width="240" height="350"/>
                      </Col>

                      
                      <p  className="userProfI">
                          <h2>&nbsp;&nbsp;About You</h2>
                         Age:<br />
                         Birthday: <br />
                         Nacionality: <br />
                         Language:<br />
                         Eye Color:<br />
                         Hair Color:<br />
                         Height: <br />
                         Weight: <br />
                         Skin Tone:<br />
                         Particular signs:<br />
                         <h2>&nbsp;&nbsp;Adress:</h2>
                         Number:<br />
                         Street:<br />
                         City: <br />
                         State: <br />
                         Zip Code:<br />
                         Country:<br />
                         <h2>&nbsp;&nbsp;Emergency Contact:</h2>
                         Name: <br />
                         Phone Number:<br />
                         Email: <br />
                         City of Recidence:<br />
                         <br />
                         <br />
                        </p>

                        
                      
                  </Container>
              </Row>

              </div>
           
                  
                      
                 
         
       </div>
    );
}

export default ProfilE;