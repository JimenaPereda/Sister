import React, { useState } from 'react';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import Modal from 'react-modal';
import Logo from './../../Components/Header/Images/Sister1.jpg';
import './style.css';

function AboutUS() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="AboutUS">
			<Button className="mainBtnIndex" onClick={() => setModalIsOpen(true)}>
				About Us
			</Button>

			<div className="modalWrapper">
				<Modal className="LargeModal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<div className="jumboCoint">
						<Jumbotron className="jumbo">
							<div className="Clooosebtn">
								<Button className="closeBtn" onClick={() => setModalIsOpen(false)}>
									X
								</Button>
							</div>
							<Container className="AboutUsBackground">
								<img className="AboutUsLogo" src={Logo} alt="" width="170" height="100" />
								<h1 className="AboutUsTtitle">About Us</h1>
								<p className="AboutUsText">
									Sister is an application that has emergency buttons for all kinds of situations in
									which many women have been involved on more than one occasion. That is why we have
									decided to create a support network with our users, authorities and your emergency
									contact. All this in order to protect you and avoid situations of physical, mental
									and emotional risk. Tired of seeing news that caused a lot of pain and that aberrant
									facts became something "common and normal" our founder decided to contribute a grain
									of sand and create this magnificent community. We are faithful believers that unity
									is strength and that together we can avoid being just another page in the newspapers
									or a disappearing poster. We are not another sad news,we are not another domestic
									violence case,we are not a sexual object,we are not a trash can for insults and
									psychological damage.We are woman and we are not going to shut up tolerate any abuse
									and we won't let them keep hurting us!
									<h3 className="weAreSis">We are sisters and we protect each other!</h3>
									<h1 className="AboutUsTtitle">How does it work ? </h1>
									Sister has a tracking system and 8 emergency buttons, Stay Safe
									Submit, Sisters around me and Complete Profile of you to locate you more easily. To
									ensure your safety, your location will only be shared with other users, your
									emergency contact and emergency services if a button is pressed.
								</p>
							</Container>
						</Jumbotron>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default AboutUS;
