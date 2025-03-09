import React from "react";
import "./destino.css"; // Importa el archivo CSS
import imagenes from "../../assets/Imagenes"; // Importa las imágenes

const Destinos = () => {
	return (
		<>
			<div className="destinos-container" id="destinos">
				<header>
					<h1>Atracciones de Chajarí</h1>
					<p>
						Descubre las mejores atracciones turísticas de la ciudad
						de Chajarí, Entre Ríos.
					</p>
				</header>

				<section className="destino">
					<article>
						<h3>Termas Chajarí</h3>
						<p>
							Las Termas Chajarí son conocidas por sus aguas
							termales con propiedades terapéuticas. Un lugar
							ideal para relajarte y disfrutar de la naturaleza.
						</p>
						<div className="image-container">
							<img
								src={imagenes.termas3}
								alt="Vista de las Termas Chajarí"
							/>
						</div>
						<a
							href="https://www.google.com/maps/dir//Termas+de+Chajarí,+Chajarí,+Entre+Ríos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver en Google Maps
						</a>
					</article>
				</section>

				<section className="destino">
					<article>
						<h3>Museo de la Ciudad</h3>
						<p>
							Conoce la historia local y cultural de Chajarí a
							través de diversas exposiciones sobre la ciudad y la
							región.
						</p>
						<div className="image-container">
							<img
								src={imagenes.museo1}
								alt="Museo de la Ciudad Chajarí"
							/>
						</div>
						<a
							href="https://www.google.com/maps/dir//Museo+de+la+Ciudad,+Chajarí,+Entre+Ríos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver en Google Maps
						</a>
					</article>
				</section>

				<section className="destino">
					<article>
						<h3>Parroquia Santa Rosa de Lima</h3>
						<p>
							Una iglesia histórica con una arquitectura
							impresionante en el centro de la ciudad, lugar de
							culto y también de interés turístico.
						</p>
						<div className="image-container">
							<img
								src={imagenes.parroquia}
								alt="Parroquia Santa Rosa de Lima Chajarí"
							/>
						</div>
						<a
							href="https://www.google.com/maps/dir//Parroquia+Santa+Rosa+de+Lima,+Chajarí,+Entre+Ríos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver en Google Maps
						</a>
					</article>
				</section>

				<section className="destino">
					<article>
						<h3>Camping Santa Ana</h3>
						<p>
							Un camping rodeado de naturaleza, ideal para pasar
							un día en familia o con amigos, disfrutando de
							actividades al aire libre.
						</p>
						<div className="image-container">
							<img
								src={imagenes.santaAna4}
								alt="Camping Santa Ana Chajarí"
							/>
						</div>
						<a
							href="https://www.google.com/maps/dir//Camping+Santa+Ana,+Chajarí,+Entre+Ríos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver en Google Maps
						</a>
					</article>
				</section>

				<section className="destino">
					<article>
						<h3>Camping Chajarí</h3>
						<p>
							Otro hermoso camping en Chajarí, ideal para pasar un
							fin de semana rodeado de naturaleza y tranquilidad.
						</p>
						<div className="image-container">
							<img
								src={imagenes.campingChajari}
								alt="Camping Chajarí"
							/>
						</div>
						<a
							href="https://www.google.com/maps/dir//Camping+Chajarí,+Chajarí,+Entre+Ríos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver en Google Maps
						</a>
					</article>
				</section>
			</div>
		</>
	);
};

export default Destinos;
