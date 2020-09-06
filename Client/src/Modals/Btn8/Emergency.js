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
        <Modal className="modalFrame" isOpen={dateIsOpen} onRequestClose ={()=> setDateIsOpen(false)}>
        <div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setDateIsOpen(false)}>
							X
						</Button>
					</div>
                   <h1 className="DateTitleMod">THE DATE BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextDateWrap">
                     <p className="DateEText">
                     You do not feel comfortable, safe or valued with the person you are with? 
                     Or are you just very bored and want to get out of the situation? 
                     We alert YOUR SISTERS, if a sister is near, she will go or contact
                      you and will help you to get out of that uncomfortable moment!
                      <h3 className="SubText">WE GOT YOU GIRL</h3>
                      
                     </p>
                  </div>

      </Modal>
      </div> 
    </div>
  );
}

export default DateModal;