import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function EmergencyModal() {
    const [emergencyIsOpen,setEmergencyIsOpen] = useState(false)
    return (
    <div className="SaveMe">
        <Button className="SaveMeBtn" onClick={()=> setEmergencyIsOpen(true)}>Save Me</Button>

       <div className="EmergencyWrapper">
        <Modal isOpen={emergencyIsOpen} onRequestClose ={()=> setEmergencyIsOpen(false)}>
                   <h1 className="EmergencyTitleMod">EMERGENCY BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextEmergencyWrap">
                     <p className="EmergencyEText">
                     We just alert EVERYONE<br/>
                     in our power please keep <br/>
                     safe sister, we are in our way there!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setEmergencyIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default EmergencyModal;