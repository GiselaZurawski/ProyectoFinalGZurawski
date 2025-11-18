import { Card, Button } from "react-bootstrap";

const ProductoCard = ({ producto, agregarAlCarrito }) => {
	return (
		<Card className="h-100 d-flex flex-column">
			<Card.Img
				variant="top"
				src={producto.imagen}
				alt={producto.descripcion}
				className="card-img-top img-fluid"
				style={{ height: "14rem", objectFit: "cover" }}
			/>

			<Card.Body className="d-flex flex-column">
				<Card.Title>{producto.nombre}</Card.Title>
				<Card.Text>{producto.descripcion}</Card.Text>
				<Card.Text>
					<strong>${producto.precio}</strong>
				</Card.Text>
				<Button
					variant="primary"
					className="mt-auto mb-3"
					onClick={() => agregarAlCarrito(producto)}>
					Agregar al Carrito
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductoCard;
