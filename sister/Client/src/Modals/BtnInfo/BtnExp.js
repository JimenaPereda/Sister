import React,{ useState } from 'react';
import {Form, Button,Row, Col} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import Modal from 'react-modal';
import b1 from "./../Images/1.jpg"
import b2 from "./../Images/2.jpg"
import b3 from "./../Images/3.jpg"
import b4 from "./../Images/4.jpg"
import b5 from "./../Images/5.jpg"
import b6 from "./../Images/6.jpg"
import b7 from "./../Images/7.jpg"
import b8 from "./../Images/8.jpg"
import './style.css';

function InfoModal() {
    const [infoIsOpen,setInfoIsOpen] = useState(false)
    return (
    <div className="Info">
        <Button className="InfoBtn" onClick={()=> setInfoIsOpen(true)}>Each Button Functions</Button>

       <div className="InfoWrapper">
        <Modal className="LargeModal" isOpen={infoIsOpen} onRequestClose ={()=> setInfoIsOpen(false)}>
        <div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setInfoIsOpen(false)}>
							X
						</Button>
					</div>
                   <h1 className="InfoTitleMod">Each button</h1>

                   <div className="textInfoWrap">
                    <Col className="InfoRowCol">

                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b1} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">Save Me</h1>
                     This button is of extreme emergency, when you press this button 
                     it will alert within 5 seconds the authorities, users within 
                     5km and your emergency contact.
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b2} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">I'm being Followed</h1>
                     This button will alert users within 2km of you, This is so that they  
                      can help you and you can reach your destination safely.
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b3} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">I'm being Discriminated</h1>
                     This button will alert users who are within a 2km radius,This is to help   
                     you in case the situation escalates and to support you.
                      </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b4} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">I do not feel well</h1>
                     This button will alert users who are within a 2km radius,This is to help  
                      you because many times We can feel physically bad without an ambulance but  
                       we are afraid that something will happen to us because we are alone.  
                      In case of a major emergency after pressing this button proceed to press the  
                       Save me button and we will send an ambulance.
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b6} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">Follow my ride</h1>
                     Many times we feel unsafe and afraid of not reaching our destination, this button  
                     is to follow more closely your location and make sure you arrive safely. Also try to 
                      fill out the Stay Safe section with more information so that we are more aware. 
                      In case a disappearance occurs, this will help the authorities to know your last location. 
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b5} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">Ring my Bell</h1>
                     Many women become victims of physical, sexual and emotional violence in their own homes.
                     This button will alert women within 2km of you to help you if an active abuser 
                     is in your home.
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b8} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">My Date is not going well</h1>
                     Sometimes we find ourselves in situations that make us uncomfortable, bored or feel at risk,
                      sometimes we need that call or greeting to get out of the situation.This button will alert 
                      women within 2km of you to help you!
                     </p>
                     </Row>
                     <Row className="InfoRow">
                     <img className="BtnExamp"src={b7} alt="" width="150" height="150"/>
                     <p className="textInfoFont">
                     <h1 className="textInfoFontTitle">I can use a friend</h1>
                     This button is the only one that has no range and will not show your location but will show your
                      phone number.Your emotions and thoughts interest us and we want to let you know that you are not 
                      alone and with us you never will be!
                      WE LOVE YOU!
                     </p>
                     </Row>
                    </Col>
                  </div>

      </Modal>
      </div> 
    </div>
  );
}

export default InfoModal;