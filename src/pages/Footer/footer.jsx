import React from "react";
import "./footer.css"; // Asegúrate de tener este archivo CSS
import socialLinks from "../../utils/Datos.jsx"; // Importamos los enlaces de las redes sociales
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaPhoneAlt,
} from "react-icons/fa"; // Importamos los íconos

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Sección izquierda */}
				<div className="footer-left">
					<p>&copy; 2025 Río Hotel. Todos los derechos reservados.</p>
				</div>

				{/* Sección central con enlaces */}
				<div className="footer-center">
					<ul className="footer-links">
						<li>
							<a href="#sobre-nosotros">Sobre Nosotros</a>
						</li>
						<li>
							<a href="#contacto">Contacto</a>
						</li>
						<li>
							<a href="#politicas">Políticas de Privacidad</a>
						</li>
						<li>
							<a href="#terminos">Términos de Servicio</a>
						</li>
					</ul>
				</div>

				{/* Sección derecha con redes sociales e iconos */}
				<div className="footer-right">
					<ul className="footer-social">
						<li>
							<a
								href={socialLinks.facebook}
								target="_blank"
								rel="noopener noreferrer"
								title="Facebook"
							>
								<FaFacebook size={24} />
							</a>
						</li>
						<li>
							<a
								href={socialLinks.instagram}
								target="_blank"
								rel="noopener noreferrer"
								title="Instagram"
							>
								<FaInstagram size={24} />
							</a>
						</li>
						<li>
							<a
								href={`https://wa.me/${socialLinks.whatsapp}`}
								target="_blank"
								rel="noopener noreferrer"
								title="WhatsApp"
							>
								<FaWhatsapp size={24} />
							</a>
						</li>
						<li>
							<a
								href={`tel:${socialLinks.telefono}`}
								target="_blank"
								rel="noopener noreferrer"
								title="Llamar"
							>
								<FaPhoneAlt size={24} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
