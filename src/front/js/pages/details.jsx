import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
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
					style={{ width: "100%", height: "200px" }}
					src={''}
					/></Col>
					<Col xs={8}> <h1>{details.name}</h1>
								<p>Birth Year: {details.birth_year}</p>
								<p>Species: {details.species}</p>
								<p>Height: {details.height}</p>
								<p>Mass: {details.mass}</p>
								<p>Gender: {details.gender}</p>
								<p>Hair Color: {details.hair_color} </p>
								<p>Skin Color: {details.skin_color}</p>
								<p>Homeworld: {}</p>
					</Col>
   			   </Row>
  			    <Row>
   			   	    <Col>
						Related Films
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					
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
