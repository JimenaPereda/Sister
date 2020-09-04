import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import './style.css';

function DiscriminatedModal() {
	const [discriminatedIsOpen, setDiscriminatedIsOpen] = useState(false);
	return (
		<div className="discriminated">
			<Button className="discriminatedBtn" onClick={() => setDiscriminatedIsOpen(true)}></Button>

			<div className="discriminatedWrapper">
				<Modal className="modalFrame" isOpen={discriminatedIsOpen} onRequestClose={() => setDiscriminatedIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setDiscriminatedIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="discriminatedTitleMod">
						DISCRIMINATION BUTTON <br /> HAS BEEN ACTIVATED!!!
					</h1>

					<div className="etextdiscriminatedWrap">
						<p className="discriminatedEText">
						<h3 className="SubText">We just alert your SISTERS </h3>
						  no woman deserves to be discriminated against!
							If a sister is nearby, she will go or reach you remember
							to file a human rights complaint if possible and
							never forget HOW BEAUTIFUL YOU ARE!
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default DiscriminatedModal;
