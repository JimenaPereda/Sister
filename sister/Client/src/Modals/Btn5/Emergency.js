import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function RingMeModal() {
	const [ringMeIsOpen, setRingMeIsOpen] = useState(false);
	return (
		<div className="RingMe">
			<Button className="RingMeBtn" onClick={() => setRingMeIsOpen(true)}></Button>

			<div className="RingMeWrapper">
				<Modal isOpen={ringMeIsOpen} onRequestClose={() => setRingMeIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setRingMeIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="RingMeTitleMod">
						RING ME BUTTON <br /> HAS BEEN ACTIVATED!!!
					</h1>

					<div className="etextRingMeWrap">
						<p className="RingMeEText">
							We alert YOUR SISTERS, if a sister is near, she will go or contact you, <br />
							if you are a victim of domestic violence or it is a major emergency, <br />
							press the SAVE ME! Button.
							<br />
							WE ARE WITH YOU!
						</p>
					</div>

				</Modal>
			</div>
		</div>
	);
}

export default RingMeModal;
