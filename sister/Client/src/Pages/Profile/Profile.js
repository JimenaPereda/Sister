import React, { Component, useEffect, useState } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './style.css';
import body from './../../Components/Images/body.jpg';
import face from './../../Components/Images/face.png';
import API from './../../Utils/API';

function ProfilE() {
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

							<Image className="bodyPic" src={body} width="240" height="350" />
						</Col>

						<p className="userProfI">
							<h2>&nbsp;&nbsp;About You</h2>
							Age:      {user.age}<br />
							Birthday:      {user.birthday} <br />
							Nacionality:       {user.nacionality}<br />
							
							Eye Color:      {user.eyeColor}
							<br />
							Hair Color:      {user.hairColor}
							<br />
							Height:      {user.height} <br />
							Weight:       {user.weight}<br />
							Skin Tone:      {user.skinTone}
							<br />
							Particular signs:      {user.particularSigns}
							<br />
							<h2>&nbsp;&nbsp;Adress:</h2>
							Number:      {user.streetNumber}
							<br />
							Street:      {user.street}
							<br />
							City:      {user.city} <br />
							State:      {user.state} <br />
							Zip Code:      {user.zipCode}
							<br />
							Country:      {user.countryofRecidence}
							<br />
							<h2>&nbsp;&nbsp;Emergency Contact:</h2>
							Name:      {user.ecName} <br />
							Phone Number:      {user.ecPhone}
							<br />
							Email:       {user.ecMail}<br />
							City of Recidence:      {user.countryofRecidence}
							<br />
							<br />
							<br />
						</p>
					</Container>
				</Row>
			</div>
		</div>
	);
}

export default ProfilE;
