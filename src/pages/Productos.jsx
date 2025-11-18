import { Row, Col } from "react-bootstrap";
import ProductoCard from "../components/ProductoCard";
import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Productos = () => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(null);
	const { agregarAlCarrito } = useContext(CarritoContext);

	const API_URL = "https://68d833532144ea3f6da79806.mockapi.io/productos";

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setProductos(data))
			.catch((error) => setError("error al cargar productos"))
			.finally(() => setCargando(false));
	}, []);

	if (cargando) return "Cargando productos...";
	if (error) return error;

	return (
		<Row xs={1} sm={2} md={3} lg={4} className="g-4">
			{productos.map((producto) => (
				<Col key={producto.id}>
					<ProductoCard
						producto={producto}
						agregarAlCarrito={agregarAlCarrito}
					/>
				</Col>
			))}
		</Row>
	);
};

export default Productos;
