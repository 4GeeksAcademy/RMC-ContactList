import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import war from "../../img/war.png";
import wake from "../../img/wake.png";
import { IoLocation } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { Context } from "../store/appContext";

import "../../styles/home.css";


const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [newContact, setNewContact] = useState({});
    const [detector, setDetector] = useState(false)
    const [payload, setPayload] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    console.log(payload);
    const handleEdit = async (event, payload, id) => {
        try {
            console.log("aqui debe estar el pedo", event, payload, id)
            event.preventDefault();
            // setNewContact(payload);
            await actions.editContact(id, payload);
            setDetector(prev => !prev)
            setPayload({
                name: "",
                email: "",
                phone: "",
                address: ""
            });
        } catch (error) {
            console.error(error)

        }
    }
    const handleDelete = async (id, event) => {
        try {
            event.preventDefault();
            console.log("id buscado", id);
            if (window.confirm("Estas seguro que quieres borrar el contacto?")) {
                await actions.deleteContact(id);
                setDetector(prev => !prev)
            }
            console.log("DELETE", id);

        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => {
        actions.viewContactos();
        console.log(store.contact)
    }, [detector]);
    return (

        <div className="text-center mt-5">
            <div className="card text-bg-dark">
                <img src={war} className="card-img h-100" alt="s" />
                <div className="card-img-overlay ">
                    <Link to="/add">
                        <button type="button" className="btn btn-success position-absolute top-0 end-0">Add New Contact</button>
                    </Link>
                    <h1 className="text-white">Contacts</h1>
                    {store.contact.map((item, index) => (
                        <div className="row bg-light w-75 border d-flex justify-content-center p-4" key={index}>
                            <div className="col-3">
                                <img src={wake} className="foto img-fluid rounded-circle" />
                            </div>
                            <div className="col-7">
                                <p>{item.name}</p>
                                <p><IoLocation />{item.address}</p>
                                <p><FaPhoneFlip />{item.phone}</p>
                                <p><MdEmail />{item.email}</p>
                                <p>{item.id}</p>
                            </div>

                            <div className="col-2">
                                <div className="row">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                                        <MdModeEditOutline /></button>
                                    <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
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
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button className="btn col" onClick={(event) => handleEdit(event, payload, item.id)}>Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn col" onClick={(event) => handleDelete(item.id, event)} ><MdDeleteForever /></button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
}
export default Contacts;
