import "../assets/styles/componentsStyles/Rate.css";

export default function StarScale(props) {
	const starValue = props.starValue;

	const range = [1, 2, 3, 4, 5];

	return (
		<div>
			{range.map((rangeElem) =>
				starValue >= rangeElem ? (
					<span
						key={rangeElem.toString()}
						style={{ color: "#ff6060", fontSize: "30px" }}
					>
						&#9733;
					</span>
				) : (
					<span
						key={rangeElem.toString()}
						style={{ color: "#e3e3e3", fontSize: "30px" }}
					>
						&#9733;
					</span>
				)
			)}
		</div>
	);
}
