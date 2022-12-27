import { Link } from "react-router-dom";
import "../assets/styles/pagesStyles/404.css";
import Footer from "../components/Footer";

const Error404 = () => {
	return (
		<>
			<div className="BlocError404">
				<h1 className="BlocError404--Title">404</h1>
				<h2 className="BlocError404--Details">
					Oups, La page que demandez n'existe pas
				</h2>
				<Link className="BlocError404--returnLanding" to="/">
					Retourner sur la page d'accueil
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default Error404;
