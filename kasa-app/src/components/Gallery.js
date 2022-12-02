import "../assets/styles/Gallery.css";
import Thumb from "../components/Thumb";

let dataQuery = require("../back/logements.json");

export default function Gallery() {
	return (
		<div className="Gallery">
			{dataQuery.map((id, title) => {
				return <Thumb key={id.id}>{id.title}</Thumb>;
			})}
		</div>
	);
}
