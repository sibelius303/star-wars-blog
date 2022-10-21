import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const {type, theid} = useParams();
	const [ details, setDetail] = useState({});

	useEffect(()=>{
		const getDetails = async ()=> {
			let response = await fetch(`https://swapi.dev/api/${type}/${theid}`);
			let data = await response.json();
			console.log(data);
			setDetail(data);
			
		};
		getDetails();
	},[])

	return (
		<div className="jumbotron">
			<h1>Hello Word</h1>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
