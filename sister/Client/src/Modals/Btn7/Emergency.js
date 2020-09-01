import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function HotLineModal() {
    const [hotLineIsOpen,setHotLineIsOpen] = useState(false)
    return (
    <div className="HotLine">
        <Button className="HotLineBtn" onClick={()=> setHotLineIsOpen(true)}></Button>

       <div className="HotLineWrapper">
        <Modal isOpen={hotLineIsOpen} onRequestClose ={()=> setHotLineIsOpen(false)}>
                   <h1 className="HotLineTitleMod">TALK BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextHotLineWrap">
                     <p className="HotLineEText">
                     If you feel the need to talk to someone, some advice or just laugh ...<br/>
                      remember that for us all emotions are valid and important!<br/>
                      We alert your sisters and a  sister will contact you!<br/>
                    If you feel that you need more professional help please reach<br/>
                     the following numbers:
                     Suicide Prevention:
                     <br/>1-800-273-8255 <br/>
                  24h Woman Crisis Hotline:<br/>
                   (954)761-1133<br/>
                      YOU ARE BEAUTIFUL!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setHotLineIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default HotLineModal;