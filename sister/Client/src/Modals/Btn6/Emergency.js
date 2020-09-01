import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function RideModal() {
    const [rideIsOpen,setRideIsOpen] = useState(false)
    return (
    <div className="Ride">
        <Button className="RideBtn" onClick={()=> setRideIsOpen(true)}></Button>

       <div className="RideWrapper">
        <Modal isOpen={rideIsOpen} onRequestClose ={()=> setRideIsOpen(false)}>
                   <h1 className="RideTitleMod">RIDE TRACKING BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextRideWrap">
                     <p className="RideEText">
                     If you feel unsafe in the vehicle in which you are going, please provide us with more <br/>
                     information in the STAY SAFE section (such as license plates, driver's name, characteristics,<br/>
                      where you are going, how you took that ride...) in this way we will have more info in case the<br/>
                       button of SAVE ME is activated, if you think this is a kidnapping please press the SAVE ME button,<br/>
                        anyway we are  following closely your location!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setRideIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default RideModal;