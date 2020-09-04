import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function NotWellModal() {
	const [notWellIsOpen, setNotWellIsOpen] = useState(false);
	return (
		<div className="NotWell">
			<Button className="NotWellBtn" onClick={() => setNotWellIsOpen(true)}></Button>

			<div className="NotWellWrapper">
				<Modal className="modalFrame" isOpen={notWellIsOpen} onRequestClose={() => setNotWellIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setNotWellIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="NotWellTitleMod">
						NOT Well BUTTON <br /> HAS BEEN ACTIVATED!!!
					</h1>

					<div className="etextNotWellWrap">
						<p className="NotWellEText">
							<h3 className="SubText">We just alert your SISTERS </h3>
							If a sister is nearby, she will go or reach you, If you feel that this is a major emergency,
							press the SAVE ME button and an ambulance will be on the way
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default NotWellModal;
