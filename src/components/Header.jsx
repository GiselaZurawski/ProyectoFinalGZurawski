import { Link, useNavigate } from "react-router-dom";
import {
	Navbar,
	Nav,
	Container,
	Button,
	Offcanvas,
	Badge,
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useState, useContext } from "react";
import Carrito from "./Carrito";
import { CarritoContext } from "../context/CarritoContext";
import "./styles.css";
import logo_ami from "../assets/img/logo_ami.jpg";

const Header = () => {
	const { token, user, logout } = useAuth();
	const navigate = useNavigate();
	const [show, setShow] = useState(false);

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { cantidadTotalCarrito } = useContext(CarritoContext);

	return (
		<Navbar expand="lg" className="bg-white text-dark mt-2 navbar-custom">
			<Container>
				<Navbar.Brand as={Link} to={"/"}>
					<div className="d-flex align-items-center">
						<img className="logo-img" src={logo_ami} alt="logo" />
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

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to={"/"} className="me-4 text-dark">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to={"/Productos"} className="me-4 text-dark">
							Productos
						</Nav.Link>

						{/* Solo admin */}
						{token && user?.role === "admin" && (
							<Nav.Link as={Link} to="/Admin" className="me-4 text-dark">
								Admin
							</Nav.Link>
						)}

						{/* Login / Logout */}
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

						{/* Solo clientes */}
						{token && user?.role === "user" && (
							<Nav.Link
								onClick={handleShow}
								className="me-4 text-dark position-relative">
								<i className="fas fa-shopping-cart"></i>
								<Badge
									bg="danger"
									pill
									className="position-absolute cart-badge">
									{cantidadTotalCarrito()}
								</Badge>
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				{/* Offcanvas del carrito */}
				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Carrito</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Carrito />
					</Offcanvas.Body>
				</Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Header;
