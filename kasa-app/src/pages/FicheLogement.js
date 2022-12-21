import { useParams, Navigate } from "react-router-dom";
import "../assets/styles/pagesStyles/FicheLogement.css";
import VectorUP from "../assets/images/VectorUP.svg";

// COMPOSANTS
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import StarScale from "../components/Rate";
import Dropdown from "../components/Dropdown";

let data = require("../back & data/logements.json");

export default function FicheLogement() {
	const params = useParams();
	let result = data.find((e) => e.id === params.id);
	if (result !== undefined) {
		return (
			<>
				<div className="Body">
					<Carrousel cover={result.pictures[0]} pictures={result.pictures} />
					<div className="BodyBloc">
						<div className="BodyBloc__details">
							<Title title={result.title} location={result.location} />
							<div className="TagsBloc">
								{result.tags.map((tags) => {
									return <Tags key={tags} tags={tags} />;
								})}
							</div>
						</div>
						<div className="RateHostBloc">
							<Host
								hostName={result.host.name}
								hostPicture={result.host.picture}
							/>
							<StarScale starValue={result.rating} />
						</div>
					</div>
					<div className="dropdownBloc">
						<Dropdown
							title="Description"
							details={result.description}
							vector={VectorUP}
						/>
						<Dropdown
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
				<Footer />
			</>
		);
	} else {
		console.error("Error ID Adress");
		return <Navigate to="/error" />;
	}
}
