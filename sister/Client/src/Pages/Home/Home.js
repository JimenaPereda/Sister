import React, { Component } from 'react';
import { Button, Col} from 'react-bootstrap';
import './style.css';


function HomeB(){
    return(

         <div>
           <div className="HomeInfoCont">
          <div className="textareaHome">
             <p className="textHome">If you press this button we will be tracking<br />
              and sharing your location. Alerting the authorities <br />
              and women near to you.  <br />
              A text message will be send to your emergency <br />contact.</p>
          </div>
         </div>
         <div className="homeDivi">
         <div className="homeBack">
           <h1 className="youAre">YOU ARE SAFE WITH US! </h1>
         
         <Col>
          <div className="colSave">
            <Button className="saveBtn">Save Me</Button>,
          </div>
         </Col>
         <div className="colCancel">
             <Button className="cancelBtn">Cancel </Button>
         </div>
        </div>
        </div>

         </div>


    );
}

export default HomeB;