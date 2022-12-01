import "../assets/styles/Gallery.css";
import Thumb from "../components/Thumb";

export default function Gallery() {
	return (
		<div className="Gallery">
			{/* Il faudra rajouter une map pour rajouter le bon nombre de thum selon le fichier JSON */}
			<Thumb />
			<Thumb />
			<Thumb />
			<Thumb />
			<Thumb />
			<Thumb />
		</div>
	);
}
