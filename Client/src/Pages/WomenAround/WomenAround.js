import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './style.css';
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
        {sisters && sisters.map(sister=>{
          return (
            <Container className="containerRow">
				<Row className="cRow">
					<Col className="colPicSis">
						<Image className="facePicSis" src={sister.facePic} rounded />
					</Col>
					<Col className="listInfo">
						<div className="cardBK">
							<p className="cardFont">
							
								<span className="highText">Name: </span><span className="highText2">{sister.name}</span>
								<br />
                               <span className="highText"> Languages: </span><span className="highText2">{sister.language}</span>
                <br />
								<span className="highText">Type of Emergency: </span><span className="highText2">{sister.typeOfEmergency}<br /></span>
								<span className="highText">Minutes Ago: </span><span className="highText2">{sister.minutesAgo}</span>
								<br />
								<span className="highText">Location close to: </span> <span className="highText2">{sister.locationClose}<br /></span>
								<span className="highText">Extact Location: </span><span className="highText2">{sister.extactLocation}</span>
								<br />
								<span className="highText">Contact Her: </span><span className="highText2">{sister.contactHer}</span>
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
