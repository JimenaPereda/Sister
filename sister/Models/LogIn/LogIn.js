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
                   <h1 className="LogInTtitle">log in</h1>
          <Form>
                 <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                   <Form.Text className="text-muted">
                     <br />
                     &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                     &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
                
               <Button  className="submitBtn"variant="primary" type="submit"> Submit </Button>
               <Button className="closeBtn" onClick={()=> setModalIsOpen(false)}>Close</Button>
                 </Form>

      </Modal>
      </div> 
    </div>
  );
}

export default App;