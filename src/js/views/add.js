import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import war from "../../img/war.png";
import { Context } from "../store/appContext";


import "../../styles/home.css";

const Add = () => {
    const { store, actions } = useContext(Context);
    const [newContact, setNewContact] = useState({});
    const handleAdd = (event) => {
        event.preventDefault();
        setNewContact(payload);
        actions.addContact(payload);
        setPayload({
            name: "",
            email: "",
            phone: "",
            address: ""
        });
        console.log("Pay", payload)
        alert("Contacto agregado!")
    }


    const [payload, setPayload] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    console.log(payload);

    return (
        <div className="text-center mt-5">
            <div className="card text-bg-dark">
                <img src={war} className="card-img" alt="s" />
                <div className="card-img-overlay">
                    <Link to="/contacts">
                        <button type="button" className="btn btn-danger position-absolute top-0 end-0">Go To Contacts</button>
                    </Link>
                    <h1 className="text-white">New Contact</h1>

                    {/* <form className="w-25 mx-auto" onSubmit={(e) => e.preventDefault()}> */}
                    <div className="mb-3">
                        <input type="text" value={payload.name} onChange={(e) => setPayload({ ...payload, name: e.target.value })} placeholder="Full Name" className="form-control" />
                        <br />
                        <input type="email" value={payload.email} onChange={(e) => setPayload({ ...payload, email: e.target.value })} placeholder="Email" className="form-control" />
                        <br />
                        <input type="text" value={payload.phone} onChange={(e) => setPayload({ ...payload, phone: e.target.value })} placeholder="Phone Number" className="form-control" />
                        <br />
                        <input type="text" value={payload.address} onChange={(e) => setPayload({ ...payload, address: e.target.value })} placeholder="Address" className="form-control" />
                        <br />
                    </div>
                    <button onClick={handleAdd} className="btn btn-warning">Save Contact</button>
                    <br />
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
};
export default Add;