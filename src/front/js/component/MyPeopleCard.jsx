import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function MyPeopleCard( {details, id} ) {
  return (
	<Card style={{ minWidth: '18rem', color:"yellow", backgroundColor:"black" }}> 						
	<Card.Img variant="top" style={{width:"100%", height:"200px"}} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
	   <Card.Body>
		  <Card.Title>{details.name}</Card.Title>
			 <Card.Text>
			 <p>gender: {details.gender}</p>
			 <p>eye color: {details.eye_color}</p>
			 <p>hair color: {details.hair_color}</p>
		 </Card.Text>
	   <Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
	   <Link to={`/people/${id}`}>
		   <Button variant="warning">See More</Button>
	   </Link>
		   <Button variant="warning" style={{backgroundColor:"none", color:"white"}}><FavoriteBorderIcon/></Button>
	   </Card.Footer>
		</Card.Body>
			 </Card>
  );
}

export default MyPeopleCard;