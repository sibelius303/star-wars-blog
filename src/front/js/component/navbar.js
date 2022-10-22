import React from "react";
import { Link } from "react-router-dom";
import estrellaMuerte from "../../img/estrella-de-la-muerte.png";
import Dropdown from 'react-bootstrap/Dropdown';


export const Navbar = () => {
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

						<Dropdown.Menu>
							<Dropdown.Item>Action</Dropdown.Item>
							<Dropdown.Item>Another action</Dropdown.Item>
							<Dropdown.Item>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
