import Navegacion from "./pages/Navv/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import Header from "./pages/Header/Header";
import Habitaciones from "./pages/Habitaciones/Habitaciones";
import Destinos from "./pages/Destinos/Destinos";
import Comodidades from "./pages/Comodidades/Comodidades";
import WhatsAppButton from "./components/BtnWhatsapp/Whatsapp";
import Footer from "./pages/Footer/footer";


function App() {
	return (
		<>
			<Navegacion />
			<Header />
			<Comodidades />
			<Habitaciones />
			<Destinos />
			<WhatsAppButton />
			<Footer/>
		</>
	);
}

export default App;
