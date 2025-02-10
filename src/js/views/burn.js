import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import war from "../../img/war.png";



import "../../styles/home.css";

const Burn = () => {
    return (

    <div className="text-center mt-5">
        <div className="card text-bg-dark">
            <img src={war} className="card-img" alt="s" />
            <div className="card-img-overlay">
                <h1 className="text-white">YEEE HAAAAAAAA!!</h1>

<iframe width="100%" height="80%" src="https://www.youtube.com/embed/P6WD7B_I_9c?si=ZuzjWcfMoanNyjoL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

               


            </div>
        </div>
    </div>
    )
};
export default Burn;