import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function MyPlanetsCard( {details, id} ) {
	const { store, actions } = useContext(Context);
  return (
	<Card style={{ minWidth: "18rem",color:"yellow", backgroundColor:"black" }}>
	<Card.Img
	  variant="top"
	  style={{ width: "100%", height: "200px" }}
	  src={id == true ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" :`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` }
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
		<Link to={`/planets/${id}`}>
			<Button variant="warning">See More</Button>
		</Link>
			<Button onClick={(e)=>actions.manageFavorites(details.name)} variant="warning" style={{backgroundColor:"none", color:"white"}}>{actions.isIn(store.favorites,details.name) ? <FavoriteSharpIcon/>: <FavoriteBorderIcon/>}</Button>
		</Card.Footer>
  </Card>
  );
}

export default MyPlanetsCard;