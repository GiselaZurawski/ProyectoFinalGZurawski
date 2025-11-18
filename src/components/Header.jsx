import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import "./styles.css";

const Header = () => {
	const { token, user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<Navbar
			expand="lg"
			className="bg-white text-dark mt-2"
			style={{ height: "7rem" }}>
			<Container>
				<Navbar.Brand as={Link} to={"/"}>
					<div className="d-flex align-items-center">
						<img
							src="src/assets/img/logo_ami.jpg"
							alt="logo"
							style={{ width: "7rem" }}
						/>
						<span
							className="ms-3"
							style={{
								color: "orange",
								fontWeight: "bold",
								fontSize: "1.2rem",
							}}>
							TIENDA DE AMIGORUMIS
						</span>
					</div>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="toggle-blanco"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to={"/"} className="me-4 text-dark">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to={"/Productos"} className="me-4 text-dark">
							Productos
						</Nav.Link>
						{/* Condición: si está logueado y es admin */}
						{token && user?.role === "admin" && (
							<Nav.Link as={Link} to="/Admin" className="me-4 text-dark">
								Admin
							</Nav.Link>
						)}

						{!token ? (
							<Nav.Link as={Link} to="/Login" className="me-4 text-dark">
								Login
							</Nav.Link>
						) : (
							<Button
								variant="outline-dark"
								onClick={handleLogout}
								className="me-4">
								Logout
							</Button>
						)}

						<Nav.Link
							as={Link}
							to={"/ProductosCarrito"}
							className="me-4 text-dark">
							<i className="fas fa-shopping-cart"></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
