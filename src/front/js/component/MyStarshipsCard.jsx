import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MyStarshipsCard( {details, id} ) {
  return (
	<Card style={{ minWidth: "18rem",color:"yellow", backgroundColor:"black" }}>
	<Card.Img
	  variant="top"
	  style={{ width: "100%", height: "200px" }}
	  src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
	/>
	<Card.Body>
	  <Card.Title>{details.name}</Card.Title>
	  <Card.Text>
		<p>model: {details.model}</p>
		<p>manufacturer: {details.manufacturer}</p>
		<p>cost_in_credits: {details.cost_in_credits}</p>
	  </Card.Text>
	</Card.Body>
	<Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
		<Link to={`/starships/${id}`}>
			<Button variant="warning">See More</Button>
		</Link>
			<Button variant="warning"><FavoriteBorderIcon/></Button>
		</Card.Footer>
  </Card>
  );
}

export default MyStarshipsCard;