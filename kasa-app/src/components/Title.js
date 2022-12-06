import "../assets/styles/Title.css";

export default function Title(props) {
	return (
		<div className="Title">
			<h1 className="Title--name">{props.title}</h1>
			<h2 className="Title--location">{props.location}</h2>
		</div>
	);
}
