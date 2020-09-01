import React, { useState } from 'react';
import { Button, Col} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import EmergencyModal from "./../../Modals/WhenEmergency/WhenEmergency"
import './style.css';


function HomeB(){
  const [emergencyIsOpen,setEmergencyIsOpen] = useState(false)
  const history = useHistory();
  console.log(history.location)
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
          <EmergencyModal/>
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