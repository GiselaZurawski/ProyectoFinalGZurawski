import ProductosCRUD from "../components/ProductosCRUD";
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
			<div
				className="w-100 d-flex justify-content-between align-items-center"
				style={{
					background: "#fbe99ee9",
					color: "orange",
					height: "4rem",
					marginBottom: "0",
				}}>
				<span style={{ marginLeft: "2rem", fontSize: "1.5rem" }}>
					Sesion Administrador
				</span>
				<button
					className="btn"
					onClick={handleLogout}
					style={{ background: "orange", marginRight: "1rem", color: "white" }}>
					Cerrar Sesion
				</button>
			</div>

			<ProductosCRUD />
		</div>
	);
};

export default Admin;
