import "../assets/styles/Footer.css";
import LOGOF from "../assets/images/LOGOF.svg";

export default function Footer() {
	return (
		<footer className="FooterBloc">
			<div className="FooterDetails">
				<img src={LOGOF} alt="LOGO" />
				<p className="FooterDetails__text">© 2020 KASA All rights reserved</p>
			</div>
		</footer>
	);
}
