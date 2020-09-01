import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function DateModal() {
    const [dateIsOpen,setDateIsOpen] = useState(false)
    return (
    <div className="Date">
        <Button className="DateBtn" onClick={()=> setDateIsOpen(true)}></Button>

       <div className="DateWrapper">
        <Modal isOpen={dateIsOpen} onRequestClose ={()=> setDateIsOpen(false)}>
                   <h1 className="DateTitleMod">THE DATE BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextDateWrap">
                     <p className="DateEText">
                     You do not feel comfortable, safe or valued with the person you are with? <br/>
                     Or are you just very bored and want to get out of the situation? <br/>
                     We alert YOUR SISTERS, if a sister is near, she will go or contact<br/>
                      you and will help you to get out of that uncomfortable moment!<br/>
                      WE GOT YOU GIRL!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setDateIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default DateModal;