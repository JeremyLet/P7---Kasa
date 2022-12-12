import { Link } from "react-router-dom";
import "../assets/styles/pagesStyles/404.css";
import Footer from "../components/Footer";

const Error404 = () => {
	return (
		<div className="__BlocError404">
			<h1 className="__BlocError404--Title">404</h1>
			<h2 className="__BlocError404--Details">
				Oups, La page que demandez n'existe pas
			</h2>
			<Link className="__BlocError404--returnLanding" to="/">
				Retourner sur la page d'accueil
			</Link>
			<Footer />
		</div>
	);
};

export default Error404;
