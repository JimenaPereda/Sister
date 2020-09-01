import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function NotWellModal() {
    const [notWellIsOpen,setNotWellIsOpen] = useState(false)
    return (
    <div className="NotWell">
        <Button className="NotWellBtn" onClick={()=> setNotWellIsOpen(true)}></Button>

       <div className="NotWellWrapper">
        <Modal isOpen={notWellIsOpen} onRequestClose ={()=> setNotWellIsOpen(false)}>
                   <h1 className="NotWellTitleMod">NOT Well BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextNotWellWrap">
                     <p className="NotWellEText">
                     We alert YOUR SISTERS, If a sister is nearby, she will go or reach  you,<br/>
                      If you feel that this is a major emergency, press the SAVE ME button <br/>
                      and an ambulance will be on the way
                    </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setNotWellIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default NotWellModal;