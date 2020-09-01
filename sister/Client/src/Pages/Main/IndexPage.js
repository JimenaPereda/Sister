import React, { useState, } from 'react';
import { Form, Button, Col, Container, Jumbotron } from 'react-bootstrap';
import Modal from 'react-modal';
import LogIn from "./../../Modals/LogIn/LogIn"
import  SignIn from "./../../Modals/CreateAccount/createAccount"
import AboutUS from "./../../Modals/AboutUs/aboutUs"


import './style.css';




function MainPage() {
	
  const [logInOpen, setLogInOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
 
	return (
		
		<div className="indexWrap">
			
			<div className="indexCard">
				
				 <LogIn />
				 <SignIn />
				 <AboutUS />
				 
		    </div>
			
		</div>
		
		
		
	);
}

export default MainPage;
