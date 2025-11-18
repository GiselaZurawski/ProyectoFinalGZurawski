import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<div className="container mt-5">
			<h2>Sesion Administrador</h2>
			<button className="btn btn-danger" onClick={handleLogout}>
				Cerrar Sesion
			</button>
		</div>
	);
};

export default Admin;
