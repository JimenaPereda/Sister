import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import './style.css';

function TextSubModal() {
	const [textSubIsOpen, setTextSubIsOpen] = useState(false);
	return (
		<div className="TextSub">
			<Button className="TextSubBtn" type="submit" onClick={() => setTextSubIsOpen(true)}>
				Submit
			</Button>

			<div className="TextSubWrapper">
				<Modal className="modalFrameSub" isOpen={textSubIsOpen} onRequestClose={() => setTextSubIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setTextSubIsOpen(false)}>
							X
						</Button>
					</div>

					<div className="textTextSubWrap">
						<p className="TextSubEText">
							<h3 className="SubText">Your Submit Was Successfully Saved</h3>

							<h3 className="SubText">WE GOT YOU GIRL</h3>
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default TextSubModal;
