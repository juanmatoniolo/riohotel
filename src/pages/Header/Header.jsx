import React from "react";
import { Carousel } from "react-bootstrap"; // Importamos el Carousel de Bootstrap
import imagenes from "../../assets/Imagenes";
import "../../styles/styles.css";

function Header() {
	return (
		<Carousel className="contenedor-imagen">
			<Carousel.Item>
				<img
					src={imagenes.riohetel1}
					alt="Termas 4"
					className="d-block imagen-contenedor-imagen"
				/>
			</Carousel.Item>
            
			<Carousel.Item>
				<img
					src={imagenes.termas2}
					alt="Termas 2"
					className="d-block imagen-contenedor-imagen"
				/>
			</Carousel.Item>

			<Carousel.Item>
				<img
					src={imagenes.termas3}
					alt="Termas 3"
					className="d-block imagen-contenedor-imagen"
				/>
			</Carousel.Item>

			<Carousel.Item>
				<img
					src={imagenes.termas4}
					alt="Termas 4"
					className="d-block imagen-contenedor-imagen"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default Header;
