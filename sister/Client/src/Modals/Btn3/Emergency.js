import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function DiscriminatedModal() {
    const [discriminatedIsOpen,setDiscriminatedIsOpen] = useState(false)
    return (
    <div className="discriminated">
        <Button className="discriminatedBtn" onClick={()=> setDiscriminatedIsOpen(true)}></Button>

       <div className="discriminatedWrapper">
        <Modal isOpen={discriminatedIsOpen} onRequestClose ={()=> setDiscriminatedIsOpen(false)}>
                   <h1 className="discriminatedTitleMod">DISCRIMINATION BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextdiscriminatedWrap">
                     <p className="discriminatedEText">
                     We alert YOUR SISTERS, no woman deserves to be discriminated against!<br/>
                      If a sister is nearby, she will go or reach you remember<br/>
                      to file a human rights complaint if possible and<br/>
                       never forget HOW BEAUTIFUL YOU ARE!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setDiscriminatedIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default DiscriminatedModal;