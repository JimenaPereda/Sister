import React, { useState } from 'react';
import { Button, Form, InputGroup, Prepend } from 'react-bootstrap';
import TextSubModal from './../../Modals/StaySafe/textSubmit';
import './style.css';

function StaySafeW() {
	const [textSubIsOpen, setTextSubIsOpen] = useState(false);
	return (
		<div>
			<div className="textareaStay">
				<div className="containerStay">
					<p className="pStay">
						Will you meet someone new? Will you go to a place that you can feel at risk?
						<br />
						Or you simply want to tell us where you are going ... Please fill in the empty field
						<br />
						and share information with us, we will keep your information for 24 hours and will
						<br />
						be save in your profile this in order to have more information in case the emergency
						<br />
						button is activated.
						<br />
						Remember that we will do everything possible to take care of you and make you
						<br />
						feel protected, if you feel that something is not right, avoid putting yourself in risky
						situations.
					</p>
				</div>
			</div>
			,
			<div className="Col">
				<Form.Group className="formC">
					<Form.Control as="textarea" placeholder="Please enter your informatioh here... " />
				</Form.Group>
			</div>
			<div className="colSub">
				<TextSubModal />
			</div>
			<div className="colH">
				<h1>We are with you!</h1>
			</div>
		</div>
	);
}

export default StaySafeW;
