import React from "react";
import { Carousel } from "react-bootstrap";
import mariposa from "../assets/img/mariposa.avif";
import erizo from "../assets/img/erizo.jpg";
import tortuguita from "../assets/img/tortuguita.avif";

function Carrusel() {
	return (
		<div style={{ maxWidth: "600px", margin: "0 auto" }}>
			<h2
				className="text-center"
				style={{ fontFamily: "'Pacifico', cursive", color: "orange" }}>
				novedades
			</h2>
			<Carousel fade interval={3000}>
				<Carousel.Item>
					<img
						className="d-block w-100 img-fluid"
						src={mariposa}
						alt="mariposa de ojos grandes"
						style={{ height: "37rem", objectFit: "cover" }}
					/>
					<Carousel.Caption>
						<h3>tierna mariposa de ojos grandes</h3>
						<p>Tejido con hilos de ternura y magia.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 img-fluid"
						src={erizo}
						alt="adorable erizo"
						style={{ height: "37rem", objectFit: "cover" }}
					/>
					<Carousel.Caption>
						<h3>adorable erizo</h3>
						<p>Ideal para abrazos nocturnos.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 img-fluid"
						src={tortuguita}
						alt="encantadora tortuga de mar"
						style={{ height: "37rem", objectFit: "cover" }}
					/>
					<Carousel.Caption>
						<h3>preciosa tortuguita</h3>
						<p>delicada y suave tortuguita .</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Carrusel;
