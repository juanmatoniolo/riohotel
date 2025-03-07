import "./habitaciones.css";
import React from "react";
import Carrusel from "../../components/Carrusel/Carrusel";
import imagenes from "../../assets/Imagenes";

const habitaciones = [
	{
		titulo: "Clásica",
		descripcion: "Cómoda habitación de 12m² con ventana y vistas.",
		detalles: [
			"Colchón de resortes",
			"Smart TV de 32 pulgadas",
			"Aire acondicionado split frío/calor",
			"Secador de pelo",
			"Cómodo escritorio",
			"Somier de 130cm x 180cm",
			"Acceso a pisos superiores sólo mediante escaleras.",
		],
		imagenes: [imagenes.clasica1, imagenes.clasica2],
	},
	{
		titulo: "Prémium",
		descripcion: "Habitación de 20m² sin ventana, con estar amplio.",
		detalles: [
			"Colchón con resortes",
			"Smart TV de 32 pulgadas",
			"Aire acondicionado split frío/calor",
			"Secador de pelo",
			"Frigobar",
			"Cama matrimonial king o individuales de 90cm x 190cm",
			"Acceso a pisos superiores sólo mediante escaleras.",
		],
		imagenes: [imagenes.premium1, imagenes.premium2],
	},
	{
		titulo: "Superior",
		descripcion: "Habitación luminosa de 18m² con ventana.",
		detalles: [
			"Colchón con resortes",
			"Smart TV de 32 pulgadas",
			"Aire acondicionado split frío/calor",
			"Secador de pelo",
			"Cómodo escritorio",
			"Cama matrimonial king o individuales de 90cm x 190cm",
			"Acceso a pisos superiores sólo mediante escaleras.",
		],
		imagenes: [imagenes.superior1, imagenes.superior2, imagenes.superior3],
	},
	{
		titulo: "Suite",
		descripcion: "Amplia habitación con ventanales y mobiliario moderno.",
		detalles: [
			"Dos ambientes",
			"Amplio vestidor",
			"Bañera con hidromasaje",
			"Smart TV de 32 pulgadas",
			"Dos aires acondicionado split frío/calor",
			"Mesa con sillas, frigobar, vajilla y hervidor eléctrico",
			"Cama matrimonial king o individuales de 90cm x 190cm",
			"Acceso a pisos superiores sólo mediante escaleras.",
		],
		imagenes: [imagenes.suit1, imagenes.suit2, imagenes.suit3],
	},
	{
		titulo: "Familiar",
		descripcion: "Habitación espaciosa con ventanales y ambiente acogedor.",
		detalles: [
			"Dos ambientes",
			"Colchones de resortes",
			"Smart TV de 32 y 42 pulgadas",
			"Dos aires acondicionado split frío/calor",
			"Baño con ducha amplia",
			"Secador de pelo, frigobar",
			"Cama matrimonial king o individuales de 90cm x 190cm",
			"Acceso a pisos superiores sólo mediante escaleras.",
		],
		imagenes: [
			imagenes.familiar1,
			imagenes.familiar2,
			imagenes.familiar3,
			imagenes.familiar4,
		],
	},
];

function Habitaciones() {
	return (
		<>
			<h2 className="text-center" id="habitaciones">
				Habitaciones
			</h2>
			<div className="container-fluid landing-container">
				{habitaciones.map((habitacion, index) => (
					<div
						key={index}
						className={`contenedor-general-habitaciones ${
							index % 2 === 0 ? "bg-light" : ""
						}`}
					>
						<div className="contendor-datos-imagenes">
							<div className="contendor-datos-habitaciones">
								<h3>{habitacion.titulo}</h3>
								<p>{habitacion.descripcion}</p>
								<ul>
									{habitacion.detalles.map((detalle, idx) => (
										<li key={idx}>{detalle}</li>
									))}
								</ul>
								<button className="btn btn-primary btn-reservar reservar-xl">
									Reservar
								</button>
							</div>
							<Carrusel
								images={habitacion.imagenes}
								className="imagenes-habitacion"
							/>
						</div>
						<button className="btn btn-primary btn-reservar reserva-sm">
							Reservar
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default Habitaciones;
