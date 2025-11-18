import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
	return (
		<footer className="bg-white text-dark text-center py-4">
			<Container>
				<Row>
					<Col md={6} className="text-center">
						<p className="mb-0">
							Poyecto de Gisela Zurawski Talento Tech comision: 25235
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
