import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function HotLineModal() {
	const [hotLineIsOpen, setHotLineIsOpen] = useState(false);
	return (
		<div className="HotLine">
			<Button className="HotLineBtn" onClick={() => setHotLineIsOpen(true)}></Button>

			<div className="HotLineWrapper">
				<Modal className="modalFrame" isOpen={hotLineIsOpen} onRequestClose={() => setHotLineIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setHotLineIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="HotLineTitleMod">
						TALK BUTTON <br /> HAS BEEN ACTIVATED!!!
					</h1>

					<div className="etextHotLineWrap">
						<p className="HotLineEText">
							If you feel the need to talk to someone, some advice or just laugh ... remember that for us
							all emotions are valid and important! We alert your sisters and a sister will contact you!
							If you feel that you need more professional help please reach the following numbers:
							<br />
							<h3 className="SubText">
								{' '}
								Suicide Prevention: 1-800-273-8255 <br />
								24h Woman Crisis Hotline: (954)761-1133
							</h3>
							<h3 className="SubText"> YOU ARE BEAUTIFUL! </h3>
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default HotLineModal;
