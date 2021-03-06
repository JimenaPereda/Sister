import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import AfterModal from './../AfterSign/AfterSign'
import Modal from 'react-modal';
import './style.css';

function SignIn() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="SignIn">
			<Button className="mainBtnIndex" onClick={() => setModalIsOpen(true)}>
				Sign in
			</Button>

			<div className="modalWrapper">
				<Modal className="modalFrame" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setModalIsOpen(false)}>
							X
						</Button>
					</div>
					<div className="accountBKG">
						<h1 className="SignInTtitle">Sign in</h1>
						<Form>
							<Form.Group controlId="formBasic">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Age</Form.Label>
								<Form.Control type="Age" placeholder="Age" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Nacionality</Form.Label>
								<Form.Control type="Nacionality" placeholder="Nacionality" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Language</Form.Label>
								<Form.Control type="Language" placeholder="Language" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Eye Color</Form.Label>
								<Form.Control type="EyeColor" placeholder="EyeColor" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Hair Color</Form.Label>
								<Form.Control type="HairColor" placeholder="HairColor" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Height</Form.Label>
								<Form.Control type="Height" placeholder="Height" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Weight</Form.Label>
								<Form.Control type="Weight" placeholder="Weight" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Skin Tone</Form.Label>
								<Form.Control type="SkinTone" placeholder="SkinTone" />
							</Form.Group>

							<Form.Group controlId="formBasic">
								<Form.Label>Particular Signs</Form.Label>
								<Form.Control type="ParticularSigns" placeholder="ParticularSigns" />
							</Form.Group>

							<Form.Group controlId="formGridAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control placeholder="1234 Main St" />
							</Form.Group>

							<Form.Group controlId="formGridAddress">
								<Form.Label>Address 2</Form.Label>
								<Form.Control placeholder="Apartment, studio, or floor" />
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridAddress">
									<Form.Label>City</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridAddress">
									<Form.Label>State</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridAddress">
									<Form.Label>Zip</Form.Label>
									<Form.Control />
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Label column lg={2}>
									Emergency contact Name:
								</Form.Label>
								<Col>
									<Form.Control
										className="emergenvyContInfo"
										type="text"
										placeholder="Emergency contact Name"
									/>
								</Col>
								<Form.Label column lg={2}>
									Emergency contact Phone number:
								</Form.Label>
								<Col>
									<Form.Control
										className="emergenvyContInfo"
										type="text"
										placeholder="Emergency contact Phone number"
									/>
								</Col>
								<Form.Label column lg={2}>
									Emergency contact Email:
								</Form.Label>
								<Col>
									<Form.Control
										className="emergenvyContInfo"
										type="text"
										placeholder="Emergency contact Email"
									/>
								</Col>
								<Form.Label column lg={2}>
									Emergency contact City of Recidence:
								</Form.Label>
								<Col>
									<Form.Control
										className="emergenvyContInfo"
										type="text"
										placeholder="Emergency contact City of Recidence"
									/>
								</Col>
							</Form.Row>
							<Form.Text className="text-muted">
								<br />
								&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
								&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; We'll never share your
								email with anyone else.
							</Form.Text>
							<div className="modBtns">
							<AfterModal />
							</div>
						</Form>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default SignIn;
