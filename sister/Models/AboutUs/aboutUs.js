import React,{ useState } from 'react';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import Modal from 'react-modal';
import './App.css';

function App() {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    return (
    <div className="SignIn">
        <Button onClick={()=> setModalIsOpen(true)}>Sign in</Button>

       <div className="modalWrapper">
        <Modal isOpen={modalIsOpen} onRequestClose ={()=> setModalIsOpen(false)}>
                   
        
        <div className="jumboCoint">
        <Jumbotron className="jumbo"  >
            <Container>
            <h1 className="AboutUsTtitle">About Us</h1>
            <p>
             <br/>
             In a world where women can become vulnerable we want to protect you. <br/>

            Tired of so many news that could have been avoided and caused a lot of pain, <br/>
             our founder  decided to create this platform to make women safer and avoid being  <br/>
             another page on the newspapers.
             <br/>
            We firmly believe that unity is strength and that as women we must protect each other.

                    We cannot allow these situations to continue, we cannot approve 
               that society has lost empathy in  such an aberrational facts that had become common. <br/> <br/>

               We are not another sad news,<br/>
                we are not another domestic violance case,  <br/>
               we are not a sexual object,  <br/>
               we are not a trash can for  <br/>
               insults and psycolagical damage. <br/><br/>
               

              We are woman and we are not <br/>
              going to shut up,<br/>
              tolarate any abuse and<br/>
              we won't let them keep <br/>
              hurting us!<br/>

            </p>
            </Container>
        </Jumbotron>
    </div>

 <Button className="closeBtn" onClick={()=> setModalIsOpen(false)}>Close</Button>

      </Modal>
      </div> 
    </div>
  );
}

export default App;