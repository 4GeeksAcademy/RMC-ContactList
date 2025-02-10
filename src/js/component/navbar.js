import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-center">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">GO HOME BOY</span>
			</Link>
			
		</nav>
	);
};
