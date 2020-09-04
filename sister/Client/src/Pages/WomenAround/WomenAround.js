import React, { Component, useEffect, useState } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './style.css';
import chica4 from './../../Components/Images/chica4.jpg';
import API from './../../Utils/API';

function WomanA() {
	const [sisters, setSisters] = useState([]);
	useEffect(() => {
		loadSisters();
	}, []);
	function loadSisters() {
		API.getSister()
			.then((res) => {
				console.log(res);
				setSisters(res.data);
			})
			.catch((err) => console.log(err));
	}

	console.log(sisters);
	return (
    <>
    {sisters.length?(
      <div >
        {sisters.map(sister=>{
          return (
            <Container className="containerRow">
				<Row className="cRow">
					<Col className="colPicSis">
						<Image className="facePicSis" src={chica4} rounded />
					</Col>
					<Col className="listInfo">
						<div className="cardBK">
							<p className="cardFont">
								<br />
								Name:{sister.name}
								<br />
                Language:{sister.language}
                <br />
								Type of Emergency: {sister.typeOfEmergency}<br />
								Minutes Ago:{sister.minutesAgo}
								<br />
								Location close to:{sister.locationClose} <br />
								Extact Location:{sister.extactLocation}
								<br />
								Contact Her:{sister.contactHer}
								<br />
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		
          )
        })}
        
      </div>

    ):(
      <p>Hola</p>
    )}

    </>
	);
}

export default WomanA;
