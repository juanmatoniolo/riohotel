import React from "react";
import "./destino.css"; // Importa el archivo CSS
import imagenes from "../../assets/Imagenes";

const Destinos = () => {
	return (
		<div className="elementor-681">
			{/* Sección con imagen de fondo y overlay */}

			{/* Sección de Santa Ana */}
			<div className="elementor-element elementor-element-19bd2ce">
				<div className="elementor-container">
					<div className="elementor-column elementor-col-100">
						<div className="elementor-widget-wrap">
							{/* Título */}

							{/* Subtítulo */}
							<div className="elementor-element elementor-element-624003d">
								<h2 className="elementor-heading-title">
									SANTA ANA
								</h2>
							</div>
							{/* Descripción */}
							<div className="elementor-element elementor-element-c612b87">
								<p>
									Zona de playas y camping, rodeadas de
									naturaleza y costas de arena blanca.
								</p>
							</div>
							{/* Galería */}
							<div className="elementor-element elementor-element-daab2d8">
								<div className="elementor-gallery__container">
									{/* Imágenes de la galería */}
									{[1, 2, 3, 4].map((item) => (
										<a
											key={item}
											className="e-gallery-item"
											href={`#img${item}`}
										>
											<div className="e-gallery-image"></div>
											<div className="elementor-gallery-item__overlay"></div>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sección de Termas */}
			<div className="elementor-element elementor-element-19bd2ce">
				<div className="elementor-container">
					<div className="elementor-column elementor-col-100">
						<div className="elementor-widget-wrap">
							{/* Título */}
							<div className="elementor-element elementor-element-ed3a3ff">
								<h6 className="elementor-heading-title">
									Explora Entre Rios
								</h6>
							</div>
							{/* Subtítulo */}
							<div className="elementor-element elementor-element-7272304">
								<h2 className="elementor-heading-title">
									TERMAS
								</h2>
							</div>
							{/* Descripción */}
							<div className="elementor-element elementor-element-7721733">
								<p>
									En el complejo termal de Chajarí podrán
									relajarse y disfrutar de las diversas
									piscinas de aguas termales.
								</p>
							</div>
							{/* Galería */}
							<div className="elementor-element elementor-element-993e854">
								<div className="elementor-gallery__container">
									{/* Imágenes de la galería */}
									{[1, 2, 3, 4].map((item) => (
										<a
											key={item}
											className="e-gallery-item"
											href={`#img${item}`}
										>
											<div className="e-gallery-image"></div>
											<div className="elementor-gallery-item__overlay"></div>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destinos;
