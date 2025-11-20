import React, { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
	const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

	const total = carrito.reduce(
		(acc, item) => acc + Number(item.precio) * item.cantidad,
		0
	);

	if (carrito.length === 0) {
		return (
			<Container className="mt-4">
				<h5>Tu carrito está vacío</h5>
			</Container>
		);
	}

	return (
		<Container className="mt-4">
			<h5 className="fs-6">Carrito de compras</h5>
			<Table hover responsive className="mt-3">
				<thead style={{ fontSize: "0.8rem" }}>
					<tr>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cant</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody style={{ fontSize: "0.7rem" }}>
					{carrito.map((item) => (
						<tr key={item.id}>
							<td>{item.nombre}</td>
							<td>${Number(item.precio).toFixed(2)}</td>
							<td>{item.cantidad}</td>
							<td>${(Number(item.precio) * item.cantidad).toFixed(2)}</td>
							<td>
								<Button
									variant="light"
									onClick={() => eliminarDelCarrito(item.id)}
									style={{ fontSize: "0.7rem", margin: "0", padding: "0" }}>
									<i class="fa-regular fa-trash-can"></i>
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<h5 className="text-end fs-6">Total: ${total.toFixed(2)}</h5>
		</Container>
	);
};

export default Carrito;
