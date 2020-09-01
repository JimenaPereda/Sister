import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function SaveMeModal() {
    const [saveMeIsOpen,setSaveMeIsOpen] = useState(false)
    return (
    <div className="SaveMe">
        <Button className="SaveMeBtn" onClick={()=> setSaveMeIsOpen(true)}></Button>

       <div className="saveMeWrapper">
        <Modal isOpen={saveMeIsOpen} onRequestClose ={()=> setSaveMeIsOpen(false)}>
                   <h1 className="saveMeTitleMod">SAVE ME BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextsaveMeWrap">
                     <p className="saveMeEText">
                     We just alert EVERYONE<br/>
                     in our power please keep <br/>
                     safe sister, we are in our way there!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setSaveMeIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default SaveMeModal;