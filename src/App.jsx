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
			<Comodidades />
			<Habitaciones />
			<Destinos />
			<WhatsAppButton />
		</>
	);
}

export default App;
