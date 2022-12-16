import "../assets/styles/componentsStyles/Footer.css";
import LOGOF from "../assets/images/LOGOF.svg";

export default function Footer() {
	return (
		<footer className="FooterBloc">
			<div className="FooterBloc__details">
				<img src={LOGOF} alt="LOGO" className="FooterBloc_image" />
				<p className="FooterBloc__details--text">
					<span>&#169;</span> 2020 KASA All rights reserved
				</p>
			</div>
		</footer>
	);
}
