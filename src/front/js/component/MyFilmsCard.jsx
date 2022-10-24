import React, { useContext, useEffect, useState, ReactPropTypes } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link,useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function MyFilmsCard( {details, id} ) {
	const { store, actions } = useContext(Context);
  return (
	<Card style={{ minWidth: "18rem",color:"yellow", backgroundColor:"black" }}>
	<Card.Img
	  variant="top"
	  style={{ width: "100%", height: "200px" }}
	  src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
	/>
	<Card.Body>
	  <Card.Title>{details.title}</Card.Title>
	  <Card.Text>
		<p>episode: {details.episode_id}</p>
		<p>director: {details.director}</p>
		<p>release_date: {details.release_date}</p>
	  </Card.Text>
	</Card.Body>
	<Card.Footer style={{display:"flex", justifyContent:"space-between"}}>
		<Link to={`/films/${id}`}>
			<Button variant="warning">See More</Button>
		</Link>
			<Button onClick={(e)=>actions.manageFavorites(details.title)} variant="warning" style={{backgroundColor:"none", color:"white"}}>{actions.isIn(store.favorites,details.title) ? <FavoriteSharpIcon/>: <FavoriteBorderIcon/>}</Button>
		</Card.Footer>
  </Card>
  );
}

export default MyFilmsCard;