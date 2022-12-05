import "../assets/styles/Section1.css";
import IMG from "../assets/images/IMG.png";

const CTA = "Chez vous, partout et ailleurs";

export default function Section1() {
	return (
		<section className="resultSection">
			<img
				className="resultSection__illustration"
				src={IMG}
				alt="background-CTA"
			/>
			<h1 className="resultSection__title">{CTA}</h1>
		</section>
	);
}
