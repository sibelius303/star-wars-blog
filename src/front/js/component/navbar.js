import React, { useContext, useEffect, useState, ReactPropTypes,  } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import estrellaMuerte from "../../img/estrella-de-la-muerte.png";
import Dropdown from 'react-bootstrap/Dropdown';



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const {type, theid} = useParams();
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<img style={{width:"50px", height:"50px"}} src={estrellaMuerte}></img>
				</Link>
				<h1 style={{ color:"yellow" }}>Star Wars</h1>
				<div className="ml-auto">
					<Dropdown>
						<Dropdown.Toggle variant="warning" id="dropdown-basic">
							Favorites
						</Dropdown.Toggle>

						<Dropdown.Menu style={{backgroundColor:"black"}}>
							{
								store.favorites.map((favorite,id)=>{
									return(
										<Dropdown.Item style={{color:"yellow"}} key={id}>{favorite.name}</Dropdown.Item>
									)
								})
							}
							
							
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
