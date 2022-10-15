import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MyPlanetsCard( {details, id} ) {
  return (
	<Card style={{ minWidth: "18rem" }}>
	<Card.Img
	  variant="top"
	  style={{ width: "100%", height: "200px" }}
	  src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
	/>
	<Card.Body>
	  <Card.Title>{details.name}</Card.Title>
	  <Card.Text>
		<p>climate: {details.climate}</p>
		<p>graviti: {details.gravity}</p>
		<p>terrain: {details.terrain}</p>
	  </Card.Text>
	</Card.Body>
	<Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
		<Link to={'/single/:'+{id}}>
			<Button variant="primary">See More</Button>
		</Link>
			<Button variant="primary"><FavoriteBorderIcon/></Button>
		</Card.Footer>
  </Card>
  );
}

export default MyPlanetsCard;