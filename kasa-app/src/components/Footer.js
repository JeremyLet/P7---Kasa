import "../assets/styles/Footer.css";
import LOGOFooter from "../assets/images/LOGOFooter.png";

export default function Footer() {
	return (
		<footer>
			<div>
				<img src={LOGOFooter} alt="" className="LOGOFooter" />
				<p>© 2020 KASA All rights reserved</p>
			</div>
		</footer>
	);
}
