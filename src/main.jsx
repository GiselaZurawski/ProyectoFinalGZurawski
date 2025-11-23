import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.jsx";
//import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<AuthProvider>
				<CarritoProvider>
					<App />
				</CarritoProvider>
			</AuthProvider>
		</HashRouter>
	</StrictMode>
);
