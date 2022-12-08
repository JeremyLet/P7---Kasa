import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import "../assets/styles/Carrousel.css";
import React from "react";

class Carrousel extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.pictures.length);
		this.state = { value: 0 };
		console.log(this.state.value);
	}

	/* 
	MEMO : 
	- La fonction picPlus tourne. A implémenter dans le render en bas (changer le state)
	- Remplacer "5" par "props.pictures.length"
	- La fonction picMoins ne marche pas (copier la picPlus dans picMoins à la fin)
	*/

	picPlus(props) {
		console.log(this.state.value);
		if (this.state.value < 5) {
			console.log("Ok");
			this.setState((state) => ({ value: state.value + 1 }));
		} else {
			console.log("nope");
		}
	}

	picMoins() {
		this.setState((state, props) => ({
			value: state.value--,
		}));
	}

	render() {
		return (
			<div className="Carrousel">
				<p>Photo de rang : {this.state.initialValue}</p>
				<button
					onClick={this.picMoins.bind(this)}
					className="Carrousel--vectorG"
				>
					<img src={VectorG} alt="vectorG" />
				</button>
				<img
					src={this.props.pictures.at(this.state.value)}
					alt="VacationPlace"
					className="Carrousel--image"
				/>
				<button
					onClick={this.picPlus.bind(this)}
					className="Carrousel--vectorD"
				>
					<img src={VectorD} alt="vectorD" />
				</button>
			</div>
		);
	}
}

export default Carrousel;
