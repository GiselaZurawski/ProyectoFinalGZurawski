import {
	Form,
	Button,
	Container,
	Row,
	Col,
	Card,
	Alert,
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (userData) => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const success = login(userName, password);
		if (success) {
			navigate("/Admin");
		} else {
			setError("usuario o contraseña incorrecta");
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center min-vh-100">
			<Row className="w-100 justify-content-center">
				<Col md={6} lg={4}>
					<Card className="shadow-lg p-4">
						<Card.Body>
							<h2 className="text-center mb-2">Inicia Sesion</h2>
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-2" controlId="formUserName">
									<Form.Label>Usuario</Form.Label>
									<Form.Control
										type="text"
										value={userName}
										onChange={(e) => setUserName(e.target.value)}
										placeholder="Ingrese su usuario"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-2" controlId="formPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Ingrese su contraseña"
										required
									/>
								</Form.Group>

								<Button
									type="submit"
									className="w-100"
									style={{ backgroundColor: "#8a6497ff", border: "none" }}>
									Ingresar
								</Button>
								{error && (
									<Alert variant="danger" className="mt-3">
										{error}
									</Alert>
								)}
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
