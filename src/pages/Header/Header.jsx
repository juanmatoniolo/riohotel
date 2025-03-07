import React from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../../assets/Imagenes";
import "../../styles/styles.css";

function Header() {
    return (
        <div className="carousel-container">
            {/* Contenido superpuesto */}
            <div className="carousel-text">
                <div className="carousel-overlay">
                    <h1>Hotel Río</h1>
                    <p className="carousel-description">
                        Estamos dedicados a brindar a nuestros huéspedes una experiencia inolvidable.
                        Ya sea que busques una escapada romántica, un viaje de negocios productivo o unas vacaciones en familia,
                        nuestro hotel es el lugar perfecto para satisfacer todas tus necesidades.
                    </p>
					<p className="carousel-description-2" >Ofrecemos una experiencia única para escapadas románticas, viajes de negocios o vacaciones familiares, garantizando comodidad y satisfacción en cada estancia.</p>
                </div>
            </div>

            {/* Carrusel */}
            <Carousel className="carousel-content" interval={4000} fade>
                <Carousel.Item>
                    <img src={imagenes.riohetel1} alt="Hotel Río" className="d-block w-100 carousel-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imagenes.suit1} alt="Suite" className="d-block w-100 carousel-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imagenes.premium2} alt="Habitación Premium" className="d-block w-100 carousel-image" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imagenes.clasica2} alt="Habitación Clásica" className="d-block w-100 carousel-image" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Header;