import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function MyPeopleCard( detail,id,name ) {
  return (
	<Card style={{ minWidth: '18rem' }}> 						
	<Card.Img variant="top" style={{width:"100%", height:"200px"}} src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
	   <Card.Body>
		  <Card.Title>{name}</Card.Title>
			 <Card.Text>
			 <p>gender: {detail.gender}</p>
			 <p>eye color: {detail.eye_color}</p>
			 <p>hair color: {detail.hair_color}</p>
		 </Card.Text>
	   <Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
	   <Link to={'/single/:theid'}>
		   <Button variant="primary">See More</Button>
	   </Link>
		   <Button variant="primary"><FavoriteBorderIcon/></Button>
	   </Card.Footer>
		</Card.Body>
			 </Card>
  );
}

export default MyPeopleCard;