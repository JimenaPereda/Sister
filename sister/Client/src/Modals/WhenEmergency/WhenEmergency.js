import React,{ useState } from 'react';
import {Form, Button,} from 'react-bootstrap';
import Modal from 'react-modal';
import './App.css';

function App() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    return (
    <div className="LogIn">
        <Button onClick={()=> setModalIsOpen(true)}>Log in</Button>

       <div className="modalWrapper">
        <Modal isOpen={modalIsOpen} onRequestClose ={()=> setModalIsOpen(false)}>
                   <h1 className="EmergencyTitleMod">EMERGENCY BUTTON <br/> HAS BEEN ACTIVATED!!!</h1>

                   <div className="etextModalWrap">
                     <p className="modalEText">
                     We just alert EVERYONE<br/>
                     in our power please keep <br/>
                     safe sister, we are in our way there!
                     </p>
                  </div>

               <Button className="closeBtn" onClick={()=> setModalIsOpen(false)}>Close</Button>
                

      </Modal>
      </div> 
    </div>
  );
}

export default App;