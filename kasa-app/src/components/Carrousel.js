import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import "../assets/styles/Carrousel.css";

export default function Carrousel(props) {
	return (
		<div className="Carrousel">
			<img src={VectorG} alt="vectorG" className="Carrousel--vectorG" />
			<img src={props.cover} alt="VacationPlace" className="Carrousel--image" />
			<img src={VectorD} alt="vectorD" className="Carrousel--vectorD" />
		</div>
	);
}
