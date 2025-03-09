import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaMapMarkerAlt, FaPhone } from "react-icons/fa"; // Importa los íconos
import "./navbar.css";
import imagenes from "../../assets/Imagenes";

function Navegacion() {
	const [expanded, setExpanded] = useState(false);

	// Función para manejar los clics en los enlaces
	const handleClick = (url) => {
		window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
	};

	return (
		<Navbar
			expand="sm"
			className="navbar-custom"
			expanded={expanded}
			onToggle={() => setExpanded(!expanded)}
		>
			
			<Container>
				<Navbar.Brand href="" className="titulo-nav">
					<img src={imagenes.riohetel2} alt="Hotel Río" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbarsExample03"
					className={`custom-toggler ${expanded ? "rotated" : ""}`}
					onClick={() => setExpanded(!expanded)}
				>
					<FaBars />
				</Navbar.Toggle>
				<Navbar.Collapse id="navbarsExample03">
					<Nav className="me-auto controlador-navbar">
						{/* Sección de enlaces principales */}
						<div className="primeros-link links-nav">
							<Nav.Link href="#comodidades">Comodidades</Nav.Link>
							<Nav.Link href="#habitaciones">
								Habitaciones
							</Nav.Link>
							<Nav.Link href="#destinos">Turismo local</Nav.Link>
						</div>

						{/* Sección de enlaces con iconos UX/UI */}
						<div className="segundos-link links-nav">
							<Nav.Link
								onClick={() =>
									handleClick(
										"https://www.google.com/maps/dir//Rivadavia+4085,+Chajarí,+Entre+Ríos"
									)
								}
							>
								<FaMapMarkerAlt style={{ color: "#24B3A1" }}  /> Cómo llegar
							</Nav.Link>
							<Nav.Link
								onClick={() =>
									handleClick("https://wa.me/543456496264")
								}
							>
								<FaPhone style={{ color: "#24B3A1" }} /> Contacto

							</Nav.Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navegacion;
