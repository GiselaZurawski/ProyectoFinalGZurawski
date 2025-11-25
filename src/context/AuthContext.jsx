import { faVault } from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const usuarios = [
	{ userName: "admin", password: "1234", role: "admin" },
	{ userName: "cliente", password: "cliente", role: "user" },
	{ userName: "invitado", password: "invitado", role: "guest" },
];

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(
		() => localStorage.getItem("token") || null
	);

	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const login = (userName, password) => {
		// Buscar usuario en la lista
		const usuarioEncontrado = usuarios.find(
			(u) => u.userName === userName && u.password === password
		);

		if (usuarioEncontrado) {
			const fakeToken = "TOKEN_DEMO_" + usuarioEncontrado.role; // token simulado
			const userData = {
				name: usuarioEncontrado.userName,
				role: usuarioEncontrado.role,
			};

			setToken(fakeToken);
			setUser(userData);

			localStorage.setItem("token", fakeToken);
			localStorage.setItem("user", JSON.stringify(userData));

			return true;
		}
		return false;
	};

	const logout = () => {
		setToken(null);
		setUser(null);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ token, login, user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
