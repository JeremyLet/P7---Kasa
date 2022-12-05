import "../assets/styles/Footer.css";
import LogoFooter from "../components/LogoFooter";

export default function Footer() {
	return (
		<footer className="FooterBloc">
			<div className="FooterDetails">
				<LogoFooter />
				<p className="FooterDetails__text">© 2020 KASA All rights reserved</p>
			</div>
		</footer>
	);
}
