import "../assets/styles/componentsStyles/Title.css";

export default function Title(props) {
	return (
		<>
			<h1 className="Title--name">{props.title}</h1>
			<h2 className="Title--location">{props.location}</h2>
		</>
	);
}
