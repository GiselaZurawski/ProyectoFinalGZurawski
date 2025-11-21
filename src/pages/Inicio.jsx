import { Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
//import Header from "../components/Header";

const Inicio = () => {
	return (
		<div style={{ background: "#fdf1aaff" }}>
			<Container fluid className="p-0">
				<Carrusel />
			</Container>
		</div>
	);
};

export default Inicio;
