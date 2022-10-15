import React from "react";
import { Link } from "react-router-dom";
import estrellaMuerte from "../../img/estrella-de-la-muerte.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<img style={{width:"50px", height:"50px"}} src={estrellaMuerte}></img>
				</Link>
				<h1 style={{ color:"yellow" }}>Star Wars</h1>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
