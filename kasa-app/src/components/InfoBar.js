import "../assets/styles/InfoBar.css";

const handleChange = () => {};

export default function InfoBar(props) {
	return (
		<div className="InfoBar">
			<div className="InfoBar__topModule">
				<p className="InfoBar__topModule--text">{props.title}</p>
				<img
					src={props.vector}
					className="InfoBar__topModule--vector"
					alt="Vector"
					onClick={handleChange}
				/>
			</div>
			<div className="InfoBar__lowModule">
				<p className="InfoBar__lowModule--text">{props.details}</p>
			</div>
		</div>
	);
}
