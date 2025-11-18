import { createContext, useState } from "react";

export const CarritoContext = createContext();
export function CarritoProvider({ children }) {
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = (producto) => {
		setCarrito([...carrito, producto]);
	};

	const eliminarDelCarrito = (id) => {
		setCarrito(carrito.filter((p) => p.id !== id));
	};

	const vaciarCarrito = () => {
		setCarrito([]);
	};

	return (
		<CarritoContext.Provider
			value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
			{children}
		</CarritoContext.Provider>
	);
}
