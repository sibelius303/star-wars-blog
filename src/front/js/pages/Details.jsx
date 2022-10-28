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

	if (type === "people"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters":type}/${theid}.jpg`}
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.name}</h1>
								<p>height: {details.height}</p>
								<p>mass: {details.mass}</p>
								<p>hair_color: {details.hair_color}</p>
								<p>skin_colo: {details.skin_color}</p>
								<p>eye_color: {details.eye_color}</p>
								<p>birth_year: {details.birth_year}</p>
								<p>gender: {details.gender}</p>
							</div>
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
	} else if (type === "planets"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={theid == 1 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : `https://starwars-visualguide.com/assets/img/${type}/${theid}.jpg` }
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.name}</h1>
								<p>rotation_period: {details.rotation_period}</p>
								<p>orbital_period: {details.orbital_period}</p>
								<p>diameter: {details.diameter}</p>
								<p>climate: {details.climate}</p>
								<p>gravity: {details.gravity}</p>
								<p>terrain: {details.terrain}</p>
								<p>surface_water: {details.surface_water}</p>
								<p>population: {details.population}</p>
							</div>
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
	} else if (type === "vehicles"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={ theid == 1 || theid == 2 || theid == 3 || theid == 5 || theid == 9 || theid == 10 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : `https://starwars-visualguide.com/assets/img/${type}/${theid}.jpg`}
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.name}</h1>
								<p>model: {details.model}</p>
								<p>manufacturer: {details.manufacturer}</p>
								<p>cost_in_credits: {details.cost_in_credits}</p>
								<p>length: {details.length}</p>
								<p>max_atmosphering_speed:{details.max_atmosphering_speed}</p>
								<p>crew: {details.crew}</p>
								<p>passengers: {details.passengers}</p>
								<p>cargo_capacity: {details.cargo_capacity}</p>
								<p>consumables: {details.consumables}</p>
								<p>vehicle_class: {details.vehicle_class}</p>

							</div>
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
	} else if (type === "starships"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={theid == 1 || theid == 2 || theid == 3 || theid == 4 || theid == 6 || theid == 7 || theid== 8 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" :`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters":type}/${theid}.jpg`}
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.name}</h1>
								<p>model: {details.model}</p>
								<p>manufacturer: {details.manufacturer}</p>
								<p>cost_in_credits: {details.cost_in_credits}</p>
								<p>length: {details.length}</p>
								<p>max_atmosphering_speed: {details.max_atmosphering_speed}</p>
								<p>crew: {details.crew}</p>
								<p>passengers: {details.passengers}</p>
								<p>cargo_capacity: {details.cargo_capacity}</p>
								<p>consumables: {details.consumables}</p>
								<p>hyperdrive_rating: {details.hyperdrive_rating}</p>
								<p>MGLT: {details.MGLT}</p>
								<p>starship_class: {details.starship_class}</p>
							</div>
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
	} else if (type === "films"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters":type}/${theid}.jpg`}
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.title}</h1>
								<p>episode_id: {details.episode_id}</p>
								<p>opening_crawl: {details.opening_crawl}</p>
								<p>director: {details.director}</p>
								<p>producer: {details.producer}</p>
								<p>release_date: {details.release_date}</p>
							</div>
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
	} else if (type === "species"){
		return (
			<div style={{backgroundImage: "url('https://fondosmil.com/th/10787.jpg')", color:"yellow", minHeight: "480px"}} className="jumbotron">
				<Container fluid>
					<Row>
							  <Col><Card.Img
						variant="top"
						style={{ width: "100%", height: "300px" }}
						src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters":type}/${theid}.jpg`}
						/></Col>
						<Col xs={8}>
							<div>
								<h1>{details.name}</h1>
								<p>classification: {details.classification}</p>
								<p>designation: {details.designation}</p>
								<p>average_height: {details.average_height}</p>
								<p>skin_colors: {details.skin_colors}</p>
								<p>hair_colors: {details.hair_colors}</p>
								<p>eye_colors: {details.eye_colors}</p>
								<p>average_lifespan: {details.average_lifespan}</p>
								<p>language: {details.language}</p>
							</div>
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
};
