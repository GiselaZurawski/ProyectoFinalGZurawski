import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, role }) => {
	const { token, user } = useAuth();

	// Si no está logueado
	if (!token) {
		return <Navigate to="/Login" />;
	}

	// Si se especifica un rol y el usuario no lo cumple
	if (role && user?.role !== role) {
		return <Navigate to="/" />;
	}

	// Si pasa las validaciones, renderiza el contenido
	return children;
};

export default PrivateRoute;
