import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInfoCircle, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";

function Comodidades() {
    return (
        <>
            <h1 id="comodidades">Comodidades</h1>
            <div className="container mt-4">
                <h2>Información del Hotel</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <FaInfoCircle className="me-2" size={24} />
                            <div>
                                <h6>Hotel RIO</h6>
                                <p>Dirección: Rivadavia 4085 - Chajari, ER<br />
                                    Mail: riohotelchajari@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <FaClock className="me-2" size={24} />
                            <div>
                                <h6>Check-In</h6>
                                <p>13:00 PM</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <FaClock className="me-2" size={24} />
                            <div>
                                <h6>Check-Out</h6>
                                <p>10:00 AM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <FaPhone className="me-2" size={24} />
                            <div>
                                <h6>Número de teléfono</h6>
                                <p>03456 - 422423</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <FaWhatsapp className="me-2" size={24} />
                            <div>
                                <h6>WhatsApp</h6>
                                <p>03456 - 496264</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comodidades;
