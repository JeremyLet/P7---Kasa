import { useParams } from "react-router-dom";
import "../assets/styles/FicheLogement.css";
import TAG from "../components/Tag";
import StarRate from "../components/StarRate";
import Dropdown from "../components/Dropdown";
import VectorUP from "../assets/images/VectorUP.svg";

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
			<div className="Carrousel">
				<img
					src={result.cover}
					alt="VacationPlace"
					className="Carrousel--image"
				/>
			</div>
			<div className="TitleHostBloc">
				<div className="Title">
					<h1 className="Title--name">{result.title}</h1>
					<h2 className="Title--location">{result.location}</h2>
				</div>
				<div className="Host">
					<p className="Host--name">{result.host.name}</p>
					<img
						src={result.host.picture}
						alt="HostPicture"
						className="Host--picture"
					/>
				</div>
			</div>

			<div className="RateTagsBloc">
				<div className="Rate">
					{stars.map((index) => {
						return <StarRate key={index} />;
					})}
				</div>

				<div className="Tags">
					{result.tags.map((tags) => {
						return <TAG key={tags} name={tags} />;
					})}
				</div>
			</div>

			<div className="dropdownBloc">
				<Dropdown
					className="dropdownBloc__dropdown"
					title="Description"
					details={result.description}
					vector={VectorUP}
				/>
				<Dropdown
					className="dropdownBloc__dropdown"
					title="Equipements"
					details={result.equipments.map((equipments) => {
						return (
							<li className="Dropdown--equipments" key={equipments}>
								{equipments}
							</li>
						);
					})}
					vector={VectorUP}
				/>
			</div>
		</div>
	);
}
