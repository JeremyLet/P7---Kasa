import "../assets/styles/componentsStyles/Rate.css";

export default function StarScale(props) {
	const starValue = props.starValue;

	const range = [1, 2, 3, 4, 5];

	return (
		<div>
			{range.map((rangeElem) =>
				starValue >= rangeElem ? (
					<span className="StarVote" key={rangeElem.toString()}>
						&#9733;
					</span>
				) : (
					<span className="StarEmpty" key={rangeElem.toString()}>
						&#9733;
					</span>
				)
			)}
		</div>
	);
}
