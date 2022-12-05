import "../assets/styles/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb(props) {
	let id = props.id;
	return (
		<>
			<Link to={`/FicheLogement/${id}`}>
				<div className="Thumb">
					<div>
						<p>{props.children}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
