import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row, Button } from 'react-bootstrap';
import './style.css';
import body from './../../Components/Images/Body.png';
import face from './../../Components/Images/jimmyFace.png';
import { useHistory } from 'react-router-dom';
import API from './../../Utils/API';

function ProfilE() {
	const history = useHistory();
	const reDirect = () => {
		history.push({ pathname: '/' });
	};

	const [user, setUser] = useState({
		age: '',
		birthday: '',
		city: '',
		countryofRecidence: '',
		ecMail: '',
		ecName: '',
		ecPhone: '',
		email: '',
		eyeColor: '',
		hairColor: '',
		height: '',
		nacionality: '',
		language: '',
		name: '',
		particularSigns: '',
		password: '',
		photoBody: '',
		photoFace: '',
		skinTone: '',
		state: '',
		street: '',
		streetNumber: '',
		weight: '',
		zipCode: '',
	});
	useEffect(() => {
		loadUser();
	}, []);
	function loadUser() {
		API.getUser()
			.then((res) => {
				console.log(res);
				setUser(res.data[0]);
			})
			.catch((err) => console.log(err));
	}
	console.log(user);
	return (
		<div>
			
			<h1 className="ProfileName">{user.name}</h1>
			<div className="ProfDiv">
				<Row className="ProfileRow">
					<Container className="ProfileCont1">
						<Col className="ProfileImages">
							<Image className="facePic" src={face} width="300" height="300" />

							<Image className="bodyPic" src={body} width="300" height="450" />
						</Col>

						<p className="userProfI">
							<h2>&nbsp;&nbsp;About You</h2>
							<span className="highText">Age: </span>{' '}
							<span className="highText3">
								{user.age}
								<br />
							</span>
							<span className="highText">Birthday: </span>
							<span className="highText3">
								{user.birthday} <br />
							</span>
							<span className="highText">Nacionality: </span>
							<span className="highText3">
								{user.nacionality}
								<br />
							</span>
							<span className="highText">Languages: </span>
							<span className="highText3">
								{user.language}
								<br />
							</span>
							<span className="highText">Eye Color: </span>{' '}
							<span className="highText3">{user.eyeColor}</span>
							<br />
							<span className="highText">Hair Color: </span>
							<span className="highText3">{user.hairColor}</span>
							<br />
							<span className="highText">Height: </span>
							<span className="highText3">
								{user.height} <br />
							</span>
							<span className="highText">Weight: </span> <span className="highText3">{user.weight}</span>
							<br />
							<span className="highText">Skin Tone: </span>
							<span className="highText3">{user.skinTone}</span>
							<br />
							<span className="highText">Particular signs: </span>{' '}
							<span className="highText3">{user.particularSigns}</span>
							<br />
							<h2>&nbsp;&nbsp;Adress:</h2>
							<span className="highText">Number: </span>{' '}
							<span className="highText3">{user.streetNumber}</span>
							<br />
							<span className="highText">Street: </span> <span className="highText3">{user.street}</span>
							<br />
							<span className="highText">City: </span>{' '}
							<span className="highText3">
								{user.city} <br />
							</span>
							<span className="highText">State: </span>{' '}
							<span className="highText3">
								{user.state} <br />
							</span>
							<span className="highText">Zip Code: </span>{' '}
							<span className="highText3">{user.zipCode}</span>
							<br />
							<span className="highText">Country: </span>
							<span className="highText3">{user.countryofRecidence}</span>
							<br />
							<h2>&nbsp;&nbsp;Emergency Contact:</h2>
							<span className="highText">Name: </span>
							<span className="highText3">
								{user.ecName} <br />
							</span>
							<span className="highText">Phone Number: </span>
							<span className="highText3">{user.ecPhone}</span>
							<br />
							<span className="highText">Email: </span>
							<span className="highText3">{user.ecMail}</span>
							<br />
							<span className="highText">City of Recidence: </span>{' '}
							<span className="highText3">{user.countryofRecidence}</span>
							<br />
							<br />
							<Button className="SubmBtn" variant="primary" onClick={() => reDirect()}>
								Log Out
							</Button>
							<br />
						</p>
					</Container>
				</Row>
			</div>
			
		</div>
	);
}

export default ProfilE;
