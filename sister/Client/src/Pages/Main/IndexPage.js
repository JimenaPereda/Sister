import React, { useState, } from 'react';
import { Form, Button, Col, Container, Jumbotron } from 'react-bootstrap';
import Modal from 'react-modal';
import './style.css';



function MainPage() {
  const [logInOpen, setLogInOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  
	return (
		
		<div className="indexWrap">
			<div className="indexCard">
				<div className="mainPageBtns">
					<div className="LogIn">
						<Button onClick={() => setLogInOpen(true)}>Log in</Button>

						<div className="modalWrapper">
							<Modal isOpen={logInOpen} onRequestClose={() => setLogInOpen(false)}>
								<h1 className="LogInTtitle">log in</h1>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
										<Form.Text className="text-muted">
											<br />
											&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
											&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;We'll never share your
											email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>

									<Button className="submitBtn" variant="primary" type="submit">
										{' '}
										Submit{' '}
									</Button>
									<Button className="closeBtn" onClick={() => setLogInOpen(false)}>
										Close
									</Button>
								</Form>
							</Modal>
						</div>
					</div>

					<div className="SignIn">
						<Button onClick={() => setSignInOpen(true)}>Sign in</Button>

						<div className="modalWrapper">
							<Modal isOpen={signInOpen} onRequestClose={() => setSignInOpen(false)}>
								<h1 className="SignInTtitle">Sign in</h1>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>

									<Form.Group controlId="formBasicAge">
										<Form.Label>Age</Form.Label>
										<Form.Control type="Age" placeholder="Age" />
									</Form.Group>

									<Form.Group controlId="formBasicNacionality">
										<Form.Label>Nacionality</Form.Label>
										<Form.Control type="Nacionality" placeholder="Nacionality" />
									</Form.Group>

									<Form.Group controlId="formBasicLanguage">
										<Form.Label>Language</Form.Label>
										<Form.Control type="Language" placeholder="Language" />
									</Form.Group>

									<Form.Group controlId="formBasicEyeColor">
										<Form.Label>Eye Color</Form.Label>
										<Form.Control type="EyeColor" placeholder="EyeColor" />
									</Form.Group>

									<Form.Group controlId="formBasicHairColor">
										<Form.Label>Hair Color</Form.Label>
										<Form.Control type="HairColor" placeholder="HairColor" />
									</Form.Group>

									<Form.Group controlId="formBasicHeight">
										<Form.Label>Height</Form.Label>
										<Form.Control type="Height" placeholder="Height" />
									</Form.Group>

									<Form.Group controlId="formBasicWeight">
										<Form.Label>Weight</Form.Label>
										<Form.Control type="Weight" placeholder="Weight" />
									</Form.Group>

									<Form.Group controlId="formBasicSkinTone">
										<Form.Label>Skin Tone</Form.Label>
										<Form.Control type="SkinTone" placeholder="SkinTone" />
									</Form.Group>

									<Form.Group controlId="formBasicParticularSigns">
										<Form.Label>Particular Signs</Form.Label>
										<Form.Control type="ParticularSigns" placeholder="ParticularSigns" />
									</Form.Group>

									<Form.Group controlId="formGridAddress1">
										<Form.Label>Address</Form.Label>
										<Form.Control placeholder="1234 Main St" />
									</Form.Group>

									<Form.Group controlId="formGridAddress2">
										<Form.Label>Address 2</Form.Label>
										<Form.Control placeholder="Apartment, studio, or floor" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCity">
											<Form.Label>City</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>State</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridZip">
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
										&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
										&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
										We'll never share your email with anyone else.
									</Form.Text>
									<div className="modBtns">
										<Button className="submitBtn" variant="primary" type="submit">
											{' '}
											Submit{' '}
										</Button>
										<Button className="closeBtn" onClick={() => setSignInOpen(false)}>
											Close
										</Button>
									</div>
								</Form>
							</Modal>
						</div>
					</div>

					<div className="AboutUS">
						<Button onClick={() => setAboutUsOpen(true)}>About Us</Button>

						<div className="modalWrapper">
							<Modal isOpen={aboutUsOpen} onRequestClose={() => setAboutUsOpen(false)}>
								<div className="jumboCoint">
									<Jumbotron className="jumbo">
										<Container>
											<h1 className="AboutUsTtitle">About Us</h1>
											<p>
												<br />
												In a world where women can become vulnerable we want to protect you.{' '}
												<br />
												Tired of so many news that could have been avoided and caused a lot of
												pain, <br />
												our founder decided to create this platform to make women safer and
												avoid being <br />
												another page on the newspapers.
												<br />
												We firmly believe that unity is strength and that as women we must
												protect each other. We cannot allow these situations to continue, we
												cannot approve that society has lost empathy in such an aberrational
												facts that had become common. <br /> <br />
												We are not another sad news,
												<br />
												we are not another domestic violance case, <br />
												we are not a sexual object, <br />
												we are not a trash can for <br />
												insults and psycolagical damage. <br />
												<br />
												We are woman and we are not <br />
												going to shut up,
												<br />
												tolarate any abuse and
												<br />
												we won't let them keep <br />
												hurting us!
												<br />
											</p>
										</Container>
									</Jumbotron>
								</div>

								<Button className="closeBtn" onClick={() => setAboutUsOpen(false)}>
									Close
								</Button>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default MainPage;
