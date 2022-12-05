import "../assets/styles/Section1.css";

export default function Section1(props) {
	return (
		<section className="resultSection">
			<img
				className="resultSection__illustration"
				src={props.image}
				alt="background-CTA"
			/>
			<h1 className="resultSection__title">{props.CTA}</h1>
		</section>
	);
}
