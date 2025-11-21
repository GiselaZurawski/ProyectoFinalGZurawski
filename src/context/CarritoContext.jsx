import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = (producto) => {
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
		alert("producto agregado");
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
