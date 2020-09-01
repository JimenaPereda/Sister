import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function FollowModal() {
    const [followIsOpen,setFollowIsOpen] = useState(false)
    return (
    <div className="follow">
        <Button className="followBtn" onClick={()=> setFollowIsOpen(true)}></Button>

       <div className="followWrapper">
        <Modal isOpen={followIsOpen} onRequestClose ={()=> setFollowIsOpen(false)}>
                   <h1 className="followTitleMod">FOLLOW BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextfollowWrap">
                     <p className="EmergencyEText">
                     <h1>We just alert your SISTERS </h1>
                     keep calm and go where there are more people, try to sneak away,<br/>
                     ask for help and stay in a safe place, if a sister is around she <br/>
                     will come for you, if things get ugly press the save me button,<br/>
                      remember that we are following your location!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setFollowIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default FollowModal;