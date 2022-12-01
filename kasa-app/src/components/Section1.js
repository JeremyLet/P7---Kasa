import "../assets/styles/Section1.css";
import IMG from "../assets/images/IMG.png";

// const CTA = "Chez vous, partout et ailleurs";

const CTA = "Chez vous, partout et ailleurs";

export default function Section1() {
	return (
		<section>
			<img src={IMG} alt="background-CTA" />
			<h1>{CTA}</h1>
		</section>
	);
}
