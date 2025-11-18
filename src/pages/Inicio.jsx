import Carrusel from "../components/Carrusel";
/*import Productos from "../pages/Productos";
import Carrito from "./Carrito";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
*/
const Inicio = () => {
	/*const [productos, setProductos] = useState([]);
	const [carrito, setCarrito] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = "https://fakestoreapi.com/products";

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
				setLoading(false);
			})
			.catch((error) => {
				setError("error al cargar productos");
				setLoading(false);
			}, []);
	});

	const agregarAlCarrito = (producto) => {
		setCarrito((carritoAnterior) => {
			const existe = carritoAnterior.find((item) => item.id === producto.id);
			const nuevoCarrito = existe
				? carritoAnterior.map((item) =>
						item.id === producto.id
							? { ...item, cantidad: item.cantidad + 1 }
							: item
				  )
				: [...carritoAnterior, { ...producto, cantidad: 1 }];

			console.log("Nuevo carrito:", nuevoCarrito);
			return nuevoCarrito;
		});
	};
	const eliminar = (id) => {
		setCarrito((carritoAnterior) =>
			carritoAnterior.filter((item) => item.id !== id)
		);
	};

	const vaciarCarrito = () => setCarrito([]);

	if (loading) return <div>Loading...</div>;

	if (error) return <p> {error}</p>;
	*/
	return (
		<div style={{ background: "#fdf1aaff" }}>
			<Carrusel />
		</div>
		/*<Container>
			<h3 className="text-center mt-3" style={{ color: "#5c4473ff" }}>
				Productos:
			</h3>
			<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />

			<Carrito
				carrito={carrito}
				eliminar={eliminar}
				vaciarCarrito={vaciarCarrito}
			/>
		</Container>
		*/
	);
};

export default Inicio;
