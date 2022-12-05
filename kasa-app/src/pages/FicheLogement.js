import { useParams } from "react-router-dom";
import "../assets/styles/FicheLogement.css";

const FicheLogement = () => {
	const params = useParams();
	console.log(params.id);
	return (
		<h1 className="Logement">
			Fiche Logement n° <span>{params.id} </span>
		</h1>
	);
};

export default FicheLogement;
