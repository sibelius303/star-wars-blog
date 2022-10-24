import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function MySpeciesCard( {details, id} ) {
	const { store, actions } = useContext(Context);
  return (
	<Card style={{ minWidth: "18rem",color:"yellow", backgroundColor:"black" }}>
	<Card.Img
	  variant="top"
	  style={{ width: "100%", height: "200px" }}
	  src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
	/>
	<Card.Body>
	  <Card.Title>{details.name}</Card.Title>
	  <Card.Text>
		<p>classification: {details.classification}</p>
		<p>designation: {details.designation}</p>
		<p>average height: {details.average_height}</p>
	  </Card.Text>
	</Card.Body>
	<Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
		<Link to={`/species/${id}`}>
			<Button variant="warning">See More</Button>
		</Link>
			<Button onClick={(e)=>actions.manageFavorites(details.name)} variant="warning" style={{backgroundColor:"none", color:"white"}}>{actions.isIn(store.favorites,details.name) ? <FavoriteSharpIcon/>: <FavoriteBorderIcon/>}</Button>
		</Card.Footer>
  </Card>
  );
}

export default MySpeciesCard;