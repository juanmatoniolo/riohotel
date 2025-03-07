import React from "react";
import { Carousel } from "react-bootstrap";

function Carrusel({ images, className = "" }) {
	return (
		<Carousel className={`contenedor-imagen ${className}`}>
			{images.map((src, index) => (
				<Carousel.Item key={index}>
					<img
						src={src}
						alt={`Imagen ${index + 1} del carrusel`}
						className={`d-block imagen-contenedor-imagen-1 imagen-${className}`} 
						loading="lazy" // Carga la imagen solo cuando es visible
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default Carrusel;
/* 
Explicacion de como se usa: 

import Carrusel from "./Carrusel";

function App() {
  return (
    <div>
      <h2>Carrusel de 2 imágenes</h2>
      <Carrusel images={["imagen1.jpg", "imagen2.jpg"]} className="carruselx2" />

      <h2>Carrusel de 3 imágenes</h2>
      <Carrusel images={["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]} className="carruselx3" />

      <h2>Carrusel de 4 imágenes</h2>
      <Carrusel images={["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"]} className="carruselx4" />
    </div>
  );
}

export default App;
*/
