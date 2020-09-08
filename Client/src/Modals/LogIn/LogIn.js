import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Login from './../../loginfire';
import Modal from 'react-modal';
import './style.css';

function LogIn() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const history = useHistory();
	const reDirect = () => {
		history.push({ pathname: '/Home' });
	};



	return (
		<div className="LogIn">
			<Button className="mainBtnIndex" onClick={() => setModalIsOpen(true)}>
				Log in
			</Button>

			<div className="modalWrapper">
				<Modal className="modalFrame" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setModalIsOpen(false)}>
							X
						</Button>
					</div>
					<h1 className="LogInTtitle">log in</h1>
					<Form onSubmit={(event) => event.preventDefault()}>
						<Form.Group controlId="formBasicEmail" >
							<Form.Label className="formLog1">Email address</Form.Label>
							<Form.Control className="formLogEmail"  placeholder="Enter email" />
						
						</Form.Group>

						<Form.Group controlId="formBasicPassword" >
							<Form.Label className="formLog1">Password</Form.Label>
							<Form.Control className="formLog"  placeholder="Password" />
						</Form.Group>

						<Login/>

						<Button className="SubmBtn" variant="primary" onClick={() => reDirect()}>
							Submit
						</Button>
					</Form>
				</Modal>
			</div>
		</div>
	);
}

export default LogIn;
