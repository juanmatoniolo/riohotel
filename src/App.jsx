import Navegacion from "./pages/Navv/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import Header from "./pages/Header/Header";
import Habitaciones from "./pages/Habitaciones/Habitaciones";
import Destinos from "./pages/Destinos/Destinos";
import Comodidades from "./pages/Comodidades/Comodidades";
import WhatsAppButton from "./components/BtnWhatsapp/Whatsapp";


function App() {
	return (
		<>
			<Navegacion />
			<Header />
			<h1>Hotel Río</h1>
			<h5>
				Estamos dedicados a brindar a nuestros huéspedes una experiencia
				inolvidable. Ya sea que esté buscando una escapada romántica, un
				viaje de negocios productivo o unas vacaciones en familia,
				nuestro hotel es el lugar perfecto para satisfacer todas sus
				necesidades. Nuestras habitaciones elegantes, servicios de
				primera categoría y ubicación privilegiada harán que su estancia
				sea inolvidable.
			</h5>
			<Comodidades />
			<Habitaciones />
			<Destinos />
			<WhatsAppButton />
		</>
	);
}

export default App;
