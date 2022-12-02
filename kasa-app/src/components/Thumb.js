import "../assets/styles/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb(props) {
	return (
		<Link to="/FicheLogement">
			<div className="Thumb">
				<div>
					<p>{props.children}</p>
				</div>
			</div>
		</Link>
	);
}
