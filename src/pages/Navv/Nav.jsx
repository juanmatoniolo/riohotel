import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "../../styles/styles.css";
import imagenes from "../../assets/Imagenes";


function Navegacion() {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
		<Navbar
			expand="sm"
			className="navbar-custom"
			expanded={expanded}
			onToggle={() => setExpanded(!expanded)}
		>
			<Container>
				<Navbar.Brand href="" className="titulo-nav"><img src={imagenes.riohetel2} alt="" /></Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbarsExample03"
					className={`custom-toggler ${expanded ? "rotated" : ""}`}
					onClick={() => setExpanded(!expanded)}
				>
					<FaBars />
				</Navbar.Toggle>
				<Navbar.Collapse id="navbarsExample03">
					<Nav className="me-auto">
						<Nav.Link href="#comodidades">Comodidades</Nav.Link>
						<Nav.Link href="#habitaciones">Habitaciones</Nav.Link>
						<Nav.Link href="#destinos">Turismo local</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>




</>
	);
}

export default Navegacion;
