import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import "../assets/styles/Carrousel.css";

function handleChange(e) {
	e.preventDefault();
}

export default function Carrousel(props) {
	return (
		<div className="Carrousel">
			<button onClick={handleChange} className="Carrousel--vectorG">
				<img src={VectorG} alt="vectorG" />
			</button>
			<img
				src={props.picture}
				alt="VacationPlace"
				className="Carrousel--image"
			/>

			<button onClick={handleChange} className="Carrousel--vectorD">
				<img src={VectorD} alt="vectorD" />
			</button>
		</div>
	);
}
