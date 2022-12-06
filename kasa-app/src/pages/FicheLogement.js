import { useParams } from "react-router-dom";
import "../assets/styles/FicheLogement.css";
import TAG from "../components/Tag";
import StarRate from "../components/StarRate";
import Dropdown from "../components/Dropdown";
import VectorDOWN from "../assets/images/VectorDOWN.svg";

let data = require("../back/logements.json");

export default function FicheLogement() {
	const params = useParams();
	let result = data.find((e) => e.id === params.id);
	let stars = [];
	for (let i = 0; i < result.rating; i++) {
		stars.push(i);
	}
	return (
		<div className="Body">
			<img src={result.cover} alt="VacationPlace" />
			<div className="Body__title">
				<h1 className="Body__title--name">{result.title}</h1>
				<h2 className="Body__title--location">{result.location}</h2>
			</div>
			<div className="Host">
				<p className="Host__name">{result.host.name}</p>
				<img src={result.host.picture} alt="HostPicture" />
			</div>

			{stars.map((index) => {
				return <StarRate key={index} />;
			})}

			{result.tags.map((tags) => {
				return <TAG key={tags} name={tags} />;
			})}
			<Dropdown
				title="Description"
				details={result.description}
				vector={VectorDOWN}
			/>
			<Dropdown
				title="Equipements"
				details={result.equipments}
				vector={VectorDOWN}
			/>
		</div>
	);
}
