import { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const API_URL = "https://68d833532144ea3f6da79806.mockapi.io/productos";

const ProductosCRUD = () => {
	const [productos, setProductos] = useState([]);
	const [show, setShow] = useState(false);
	const [form, setForm] = useState({
		nombre: "",
		descripcion: "",
		precio: "",
		stock: "",
		imagen: "",
	});
	const [editId, setEditId] = useState(null);

	// obtener productos
	const getProductos = () => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setProductos(data))
			.catch((error) => console.error("Error al obtener productos:", error));
	};

	// cerrar modal
	const handleClose = () => {
		setShow(false);
		setForm({ nombre: "", descripcion: "", precio: "", stock: "", imagen: "" });
		setEditId(null);
	};

	// abrir modal (para agregar o editar)
	const handleShow = (producto) => {
		setShow(true);
		if (producto) {
			setForm({
				...producto,
				precio: Number(producto.precio),
				stock: Number(producto.stock),
			});
			setEditId(producto.id);
		}
	};

	// crear o editar producto
	const handleSubmit = (e) => {
		e.preventDefault();

		const productData = {
			...form,
			precio: Number(form.precio),
			stock: Number(form.stock),
		};

		const method = editId ? "PUT" : "POST";
		const url = editId ? `${API_URL}/${editId}` : API_URL;

		fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(productData),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Error al guardar el producto");
				return res.json();
			})
			.then(() => {
				handleClose();
				getProductos();
			})
			.catch((error) => console.error("Error en handleSubmit:", error));
	};

	// eliminar producto
	const eliminarProducto = (id) => {
		if (!window.confirm("¿Seguro que quiere eliminar este producto?")) return;

		fetch(`${API_URL}/${id}`, { method: "DELETE" })
			.then((res) => {
				if (!res.ok) throw new Error("Error al eliminar el producto");
				getProductos();
			})
			.catch((error) => console.error("Error al eliminar:", error));
	};

	// cargar productos al montar
	useEffect(() => {
		getProductos();
	}, []);

	return (
		<div className="container mt-4" style={{ background: "#fbfabee6" }}>
			<div
				className=" d-flex justify-content-between align-items-center"
				style={{ color: "orange", fontSize: "2rem" }}>
				<span>Gestion de Productos</span>
				<Button
					className="mb-3"
					onClick={() => handleShow()}
					style={{ background: "orange", border: "none", marginTop: "1rem" }}>
					Agregar Producto
				</Button>
			</div>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Descripción</th>
						<th>Precio</th>
						<th>Stock</th>
						<th>Imagen</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{productos.map((prod) => (
						<tr key={prod.id}>
							<td>{prod.nombre}</td>
							<td>{prod.descripcion}</td>
							<td>${Number(prod.precio).toFixed(2)}</td>
							<td>{prod.stock}</td>
							<td>
								{prod.image?.startsWith("http") ? (
									<img
										src={prod.imagen}
										alt={prod.nombre}
										width={50}
										height={50}
										style={{ objectFit: "cover" }}
									/>
								) : (
									<span>{prod.imagen}</span>
								)}
							</td>
							<td>
								<div className="d-flex gap-2">
									<Button
										size="sm"
										variant="light"
										onClick={() => handleShow(prod)}>
										<i class="fa-regular fa-pen-to-square"></i>
									</Button>
									<Button
										size="sm"
										variant="light"
										onClick={() => eliminarProducto(prod.id)}>
										<i class="fa-regular fa-trash-can"></i>
									</Button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			{/* Modal agregar / editar */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-2">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								value={form.nombre}
								onChange={(e) => setForm({ ...form, nombre: e.target.value })}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Descripción</Form.Label>
							<Form.Control
								value={form.descripcion}
								onChange={(e) =>
									setForm({ ...form, descripcion: e.target.value })
								}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Precio</Form.Label>
							<Form.Control
								type="number"
								value={form.precio}
								onChange={(e) => setForm({ ...form, precio: e.target.value })}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Stock</Form.Label>
							<Form.Control
								type="number"
								value={form.stock}
								onChange={(e) => setForm({ ...form, stock: e.target.value })}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Label>Imagen (URL)</Form.Label>
							<Form.Control
								value={form.imagen}
								onChange={(e) => setForm({ ...form, imagen: e.target.value })}
							/>
						</Form.Group>

						<Button type="submit" variant="primary">
							{editId ? "Guardar cambios" : "Agregar"}
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ProductosCRUD;
