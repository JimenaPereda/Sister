import React, { useState } from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import SaveMeModal from "./../../Modals/Btn1/Emergency";
import FollowModal from "./../../Modals/Btn2/Emergency";
import DiscriminatedModal from "./../../Modals/Btn3/Emergency";
import NotWellModal from "./../../Modals/Btn4/Emergency";
import RideModal from "./../../Modals/Btn6/Emergency";
import RingMeModal from "./../../Modals/Btn5/Emergency";
import HotLineModal from "./../../Modals/Btn7/Emergency";
import  DateModal from "./../../Modals/Btn8/Emergency";
import  InfoModal from "./../../Modals/BtnInfo/BtnExp";


import './style.css';


function HomeB(){

  const [saveMeIsOpen,setSaveMeIsOpen] = useState(false)
  const [followIsOpen,setFollowIsOpen] = useState(false)
  const [discriminatedIsOpen,setDiscriminatedIsOpen] = useState(false)
  const [notWellIsOpen,setNotWellIsOpen] = useState(false)
  const [rideIsOpen,setRideIsOpen] = useState(false)
  const [ringMeIsOpen,setRingMeIsOpen] = useState(false)
  const [hotLineIsOpen,setHotLineIsOpen] = useState(false)
  const [dateIsOpen,setDateIsOpen] = useState(false)
  const [infoIsOpen,setInfoIsOpen] = useState(false)

 

  const history = useHistory();
  console.log(history.location)
    return(

         <div>
         
           <h1 className="youAre">YOU ARE SAFE WITH US! </h1>
         
         <div className="emergencyBtnsGroup">
           <Row className="emergencyBtnsRow1">
               <SaveMeModal />
               <FollowModal />
               <DiscriminatedModal />
               <NotWellModal />
           </Row>
           <Row className="emergencyBtnsRow2">
               <RideModal />
               <RingMeModal/>
               < DateModal/>
               <HotLineModal/>
           </Row>
         </div>
         <div className="colCancel">
             <Button className="cancelBtn"> C A N C E L</Button>
         </div>
         <div className="HomeInfoCont">
          
             <InfoModal />
         
         </div>
         
         </div>


    );
}

export default HomeB;