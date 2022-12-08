import { useParams } from "react-router-dom";
import "../assets/styles/FicheLogement.css";
import VectorUP from "../assets/images/VectorUP.svg";

// COMPOSANTS
import Carrousel from "../components/Carrousel";
import Title from "../components/Title";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import StarScale from "../components/Rate";
import Dropdown from "../components/Dropdown";

let data = require("../back/logements.json");

export default function FicheLogement() {
	const params = useParams();
	let result = data.find((e) => e.id === params.id);
	return (
		<div className="Body">
			<Carrousel cover={result.cover} />
			<div className="TitleHostBloc">
				<Title title={result.title} location={result.location} />
				<Host hostName={result.host.name} hostPicture={result.host.picture} />
			</div>

			<div className="BlocRateTags">
				<div className="TagsBloc">
					{result.tags.map((tags) => {
						return <Tags key={tags} tags={tags} />;
					})}
				</div>

				<StarScale starValue={result.rating} />
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
			<Footer />
		</div>
	);
}
