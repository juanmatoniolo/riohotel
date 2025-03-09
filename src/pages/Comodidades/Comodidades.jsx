import {
	FaParking,
	FaWifi,
	FaGlassMartiniAlt,
	FaTv,
	FaCoffee,
	FaSwimmingPool,
	FaInfoCircle,
	FaHotel,
	FaMapMarkerAlt,
	FaEnvelope,
	FaClock,
	FaPhone,
	FaWhatsapp,
} from "react-icons/fa";
import "./comodidades.css";

const amenities = [
	{ icon: FaParking, text: "Estacionamiento" },
	{ icon: FaWifi, text: "Wi-Fi" },
	{ icon: FaGlassMartiniAlt, text: "Minibar" },
	{ icon: FaTv, text: "Smart TV" },
	{ icon: FaCoffee, text: "Desayuno sin TAC" },
	{ icon: FaSwimmingPool, text: "Piscina" },
];

const contactInfo = [
  { icon: FaClock, text: "Check-In: 13:00 PM" },
  { icon: FaClock, text: "Check-Out: 10:00 AM" },
	{
		icon: FaMapMarkerAlt,
		text: "Cómo llegar",
		link: "https://www.google.com/maps/dir//Rivadavia+4085,+Chajarí,+Entre+Ríos",
	},
	{
		icon: FaEnvelope,
		text: "riohotelchajari@hotmail.com",
		link: "mailto:riohotelchajari@hotmail.com",
	},
	{ icon: FaPhone, text: "03456 - 422423", link: "tel:03456422423" },
	{
		icon: FaWhatsapp,
		text: "03456 - 496264",
		link: "https://wa.me/543456496264",
	},
];

export default function HotelAmenities() {
	return (
		<section className="hotel-section" id="comodidades">
			<div className="container">
				<h2> Comodidades</h2>
				<div className="grid amenities-grid">
					{amenities.map(({ icon: Icon, text }, index) => (
						<div key={index} className="amenity">
							<Icon className="icon" />
							<p>{text}</p>
						</div>
					))}
				</div>
        <br />
        <br />

				<h3>Información del Hotel</h3>
				<div className="grid contact-grid">
					{contactInfo.map(({ icon: Icon, text, link }, index) => (
						<div key={index} className="contact-item">
							<Icon className="icon" />
							{link ? (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{text}
								</a>
							) : (
								<p>{text}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
