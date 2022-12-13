import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import "../assets/styles/componentsStyles/Carrousel.css";
import React from "react";

class Carrousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0 /* Index du tableau */,
			min: 0 /* val la plus basse */,
			max: props.pictures.length - 1 /* nbre de pics de l'array */,
			compteurValue: 1,
		};
	}

	pictureNext() {
		if (this.state.index < this.state.max) {
			this.setState((state) => ({
				index: state.index + 1,
				compteurValue: state.compteurValue + 1,
			}));
		} else {
			this.setState(() => ({ index: 0, compteurValue: 1 }));
		}
	}

	picturePrevious() {
		if (this.state.index > this.state.min) {
			this.setState((state) => ({
				index: state.index - 1,
				compteurValue: state.compteurValue - 1,
			}));
		} else {
			this.setState((state) => ({
				index: (state.index = this.props.pictures.length - 1),
				compteurValue: (state.compteurValue = this.props.pictures.length),
			}));
		}
	}

	render() {
		return (
			<div className="Carrousel">
				<img
					src={this.props.pictures.at(this.state.index)}
					alt="VacationPlace"
					className="Carrousel--image"
				/>
				<div className="Carrousel__buttons">
					<button
						onClick={this.picturePrevious.bind(this)}
						className="Carrousel--vectorG"
					>
						<img src={VectorG} alt="vectorG" />
					</button>

					<button
						onClick={this.pictureNext.bind(this)}
						className="Carrousel--vectorD"
					>
						<img src={VectorD} alt="vectorD" />
					</button>
				</div>
				<p className="Carrousel__status">
					{this.state.compteurValue}/{this.props.pictures.length}
				</p>
			</div>
		);
	}
}

export default Carrousel;
