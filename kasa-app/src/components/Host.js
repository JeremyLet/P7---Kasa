import "../assets/styles/componentsStyles/Host.css";

export default function Host(props) {
	return (
		<div className="Host">
			<p className="Host--name">{props.hostName}</p>
			<img
				src={props.hostPicture}
				alt="HostPicture"
				className="Host--picture"
			/>
		</div>
	);
}
