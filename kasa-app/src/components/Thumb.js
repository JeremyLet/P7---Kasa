import "../assets/styles/componentsStyles/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb(props) {
	let id = props.id;
	return (
		<Link className="ThumbBloc__link" to={`/FicheLogement/${id}`}>
			<div className="ThumbBloc">
				<img src={props.cover} alt="ThumbImage" className="ThumbBloc__image" />
				<span className="ThumbBloc__title">{props.children}</span>
			</div>
		</Link>
	);
}
