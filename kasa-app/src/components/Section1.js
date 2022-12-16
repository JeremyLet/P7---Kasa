import "../assets/styles/componentsStyles/Section1.css";

export default function Section1(props) {
	return (
		<section className="resultSection">
			<h1 className="resultSection__title">{props.CTA}</h1>
			<div className="resultSection__background"></div>
		</section>
	);
}
