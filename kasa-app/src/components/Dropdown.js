import "../assets/styles/Dropdown.css";

const handleChange = () => {};

export default function Dropdown(props) {
	return (
		<div className="Dropdown">
			<div className="Dropdown__topModule">
				<p className="Dropdown__topModule--text">{props.title}</p>
				<img
					src={props.vector}
					className="Dropdown__topModule--vector"
					alt="Vector"
					onClick={handleChange}
				/>
			</div>
			<div className="Dropdown__lowModule">
				<p className="Dropdown__lowModule--text">{props.details}</p>
			</div>
		</div>
	);
}
