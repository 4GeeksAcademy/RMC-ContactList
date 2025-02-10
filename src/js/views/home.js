import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import war from "../../img/war.png";



import "../../styles/home.css";

const Home = () => {
	return(
	
	
	<div className="text-center mt-5">
		<div className="card text-bg-dark">
			<img src={war} className="card-img" alt="s" />
			<div className="card-img-overlay">
				<p className="d-inline-flex gap-1">

					<button className="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						<h1>THE END IS NEAR</h1>
						<h4>Click to see your options, or not</h4>
					</button>
				</p>
				<div className="collapse w-75 align-text-toptext-bottom  position-relative" id="collapseExample">
					<div className="card card-body w-50 text-center bg-light">
						<Link to="/add">
						<button className="btn">Add Emergency contact</button>
						</Link>
					
					</div>
					<br/>
					<div className="card card-body w-50 text-center bg-light">
						<Link to="/contacts">
						<button className="btn">Watch your Emergency contacts</button>
						</Link>
					
					</div>
					<br/>
					<div className="card card-body w-50 text-center bg-danger">
						<Link to="/burn">
					<button className="btn">Burn it all!!</button>
					</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)};
export default Home;
