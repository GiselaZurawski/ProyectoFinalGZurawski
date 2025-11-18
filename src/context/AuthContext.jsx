import { faVault } from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(
		() => localStorage.getItem("token") || null
	);

	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const login = (userName, password) => {
		if (userName === "Gisela" && password === "GiselaZ") {
			const token =
				"IhD1V8jftj68ucp14FZ74Pe52HbJ4mKO5CgLMbdb4PXzsCaZQas0rhT7Ttt91h8D";
			const userData = { name: userName, role: "admin" };

			setToken(token);
			setUser(userData);

			localStorage.setItem("token", token);
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
