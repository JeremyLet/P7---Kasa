import "../assets/styles/Thumb.css";

/* Appel des datas du JSON :

let data = require("../logements.json");

*/

const LocationName = "Titre de la location";

export default function Thumb() {
	return (
		<div className="Thumb">
			{/* Exemple de partie dynamique
			<p>{data[3].title}</p>		
			*/}
			<div>
				<p>{LocationName}</p>
			</div>
		</div>
	);
}
