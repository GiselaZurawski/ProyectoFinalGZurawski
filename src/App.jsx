import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import { Route, Routes } from "react-router-dom";
import ProductoDetalle from "./components/ProductoDetalle";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/Productos" element={<Productos />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Productos/:id" element={<ProductoDetalle />} />
				<Route
					path="/Admin"
					element={
						<PrivateRoute>
							<Admin />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
