import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const Details = ()=> {
	const { store, actions } = useContext(Context);
	const {type, theid} = useParams();
	const [ details, setDetails] = useState({});

	useEffect(()=>{
		const getDetails = async ()=> {
			let response = await fetch(`https://swapi.dev/api/${type}/${theid}`);
			let data = await response.json();
			console.log(data);
			setDetails(data);
			console.log(details);
		};
		getDetails();
	},[])

	return (
		<div className="jumbotron">
			<Container fluid>
				<Row>
   			   	    <Col><Card.Img
					variant="top"
					style={{ width: "100%", height: "300px" }}
					src={''}
					/></Col>
					<Col xs={8}>
						<div></div>
					</Col>
   			   </Row>
  			    <Row>
   			   	    <Col>
						Related Films
						<div style={{display:"flex"}}>
						</div>
					</Col>
					<Col>
						Related Vehicles
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</Col>
					<Col>
						Related Starships
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						
					</Col>
   			   </Row>
   			 </Container>	
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
