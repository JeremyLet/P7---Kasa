import "../assets/styles/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb(props) {
	let id = props.id;
	return (
		<>
			<Link className="ThumbBloc__link" to={`/FicheLogement/${id}`}>
				<div className="ThumbGeneral">
					<div className="ThumbBloc">
						<p className="ThumbBloc__title">{props.children}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
