import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes></Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="logement" element={<Logement />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
