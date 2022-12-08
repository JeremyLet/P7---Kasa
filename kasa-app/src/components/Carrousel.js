import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import "../assets/styles/Carrousel.css";
import React from "react";

class Carrousel extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.pictures.length);
		this.state = {
			value: 0,
			min: -3,
			max: props.pictures.length - 1,
		};
	}

	pictureNext() {
		if (this.state.value < this.state.max) {
			this.setState((state) => ({ value: state.value + 1 }));
		} else {
			this.setState(() => ({ value: 0 }));
		}
	}

	picturePrevious() {
		if (this.state.value > this.state.min) {
			this.setState((state) => ({ value: state.value - 1 }));
		} else {
			this.setState(() => ({ value: 0 }));
		}
	}

	render() {
		return (
			<div className="Carrousel">
				<button
					onClick={this.picturePrevious.bind(this)}
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
					onClick={this.pictureNext.bind(this)}
					className="Carrousel--vectorD"
				>
					<img src={VectorD} alt="vectorD" />
				</button>
			</div>
		);
	}
}

export default Carrousel;
