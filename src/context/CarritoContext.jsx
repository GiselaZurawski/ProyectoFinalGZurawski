import { createContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const { user } = useAuth();

	const agregarAlCarrito = (producto) => {
		if (user?.role !== "user") {
			Swal.fire({
				title: "Acceso denegado",
				text: "Solo los clientes pueden agregar productos al carrito",
				icon: "error",
				confirmButtonText: "Ok",
			});
			return;
		}

		setCarrito((prevCarrito) => {
			const existe = prevCarrito.find((item) => item.id === producto.id);
			if (existe) {
				return prevCarrito.map((item) =>
					item.id === producto.id
						? { ...item, cantidad: item.cantidad + 1 }
						: item
				);
			}
			return [...prevCarrito, { ...producto, cantidad: 1 }];
		});

		Swal.fire({
			title: "¡Producto agregado!",
			text: "Tu producto se añadió al carrito",
			icon: "success",
			confirmButtonText: "Genial",
		});
	};

	const eliminarDelCarrito = (id) => {
		setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
	};

	const vaciarCarrito = () => {
		setCarrito([]);
	};

	const cantidadTotalCarrito = () => {
		return carrito.reduce((total, item) => total + item.cantidad, 0);
	};

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarAlCarrito,
				eliminarDelCarrito,
				vaciarCarrito,
				cantidadTotalCarrito,
			}}>
			{children}
		</CarritoContext.Provider>
	);
};
