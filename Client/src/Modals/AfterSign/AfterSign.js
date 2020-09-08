import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function AfterModal() {
	const [afterIsOpen, setAfterIsOpen] = useState(false);

	return (
		
		<div className="After">
			<Button className="SubmBtn" type="submit" onClick={() => setAfterIsOpen(true)} >
				Submit
			</Button>

			<div className="AfterWrapper">
				<Modal className="modalFrameSub" isOpen={afterIsOpen} onRequestClose={() => setAfterIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setAfterIsOpen(false)}>
							X
						</Button>
					</div>

					<div className="textAfterWrap">
						<p className="AfterEText">
                        We will review your information and
                        we will send an email with the steps
                        to follow to confirm your
                        identity and proceed with your registration
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default AfterModal;