import React from "react";
import { Carousel } from "react-bootstrap";

function Carrusel() {
	return (
		<div style={{ maxWidth: "600px", margin: "0 auto" }}>
			<Carousel fade interval={3000}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="src/assets/img/mariposa.avif"
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
						className="d-block w-100"
						src="src/assets/img/erizo.jpg"
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
						className="d-block w-100"
						src="src/assets/img/tortuguita.avif"
						alt="preciosa tortuguita"
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
