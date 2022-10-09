import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [ people, setPeople] = useState([]);
	const [ planets, setPlanets] = useState([]);

	const getPeople = async () => {
		try {
			const response = await fetch("https://swapi.dev/api/people");
			const data = await response.json();
			setPeople(data.results);
			console.log(data.results);
			
		} catch (error) {
			console.log(error)
		}
	};

	const getPlanets = async () => {
		try {
			const response = await fetch("https://swapi.dev/api/planets");
			const data = await response.json();
			setPlanets(data.results);
			console.log(data.results);
			
		} catch (error) {
			console.log(error)
		}
	};
	useEffect(()=>{
		getPeople();
		getPlanets();
	},[]);





	return (
		<div className="container">
			<div className="containerPeople">
			{
				people.map((person)=>{
					return (
						<Card style={{ width: '18rem' }}> 						
						<Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
						   <Card.Body>
							  <Card.Title>{person.name}</Card.Title>
								 <Card.Text>
							   <p>hair olor: {person.hair_color}</p>
							 <p>eye color: {person.eye_color}</p>
							 <p>gender: {person.gender}</p>
							 </Card.Text>
							 <Link to={"/single"}>
								 <Button variant="primary">More Details</Button>
							 </Link>
							</Card.Body>
						 </Card>

					)
				})
			}
			</div>
			<div className="containerPlanets">
				{
					planets.map((planet)=>{
						return (
							<Card style={{ width: '18rem' }}> 						
						<Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/planets/2.jpg" />
						   <Card.Body>
							  <Card.Title>{planet.name}</Card.Title>
								 <Card.Text>
							   <p>gravity: {planet.gravity}</p>
							 <p>climate: {planet.climate}</p>
							 <p>terrain: {planet.terrain}</p>
							 </Card.Text>
							<Button variant="primary">More Details</Button>
							</Card.Body>
						 </Card>
						);
					})
				}
			</div>

		</div>
	);
};
