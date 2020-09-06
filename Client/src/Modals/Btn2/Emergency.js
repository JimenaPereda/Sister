import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function FollowModal() {
	const [followIsOpen, setFollowIsOpen] = useState(false);
	return (
		<div className="follow">
			<Button className="followBtn" onClick={() => setFollowIsOpen(true)}></Button>

			<div className="followWrapper">
				<Modal className="modalFrame" isOpen={followIsOpen} onRequestClose={() => setFollowIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setFollowIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="followTitleMod">
						FOLLOW BUTTON <br /> HAS BEEN ACTIVATED!!!
					</h1>

					<div className="etextfollowWrap">
						<p className="EmergencyEText">
							<h3 className="SubText">We just alert your SISTERS </h3>
							keep calm and go where there are more people, try to sneak away,
							ask for help and stay in a safe place, if a sister is around she 
							will come for you, if things get ugly press the save me button,
							remember that we are following your location!
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default FollowModal;
