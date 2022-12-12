import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/FicheLogement/:id" element={<FicheLogement />} />
					<Route path="About" element={<About />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
