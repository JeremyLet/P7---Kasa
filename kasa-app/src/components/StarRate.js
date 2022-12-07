import "../assets/styles/StarRate.css";
import { useState } from "react";

let valeurderetour = 1;

const StarRate = () => {
	const [rating, setRating] = useState(0);
	console.log(rating);
	console.log(setRating);
	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				return (
					<span
						key={index}
						className="ZeroStar"
						rating={rating + valeurderetour}
					>
						&#9733;
					</span>
				);
			})}
		</div>
	);
};
export default StarRate;

// export default function StarRate() {
// 	return <img src={StarRateVector} alt="star" />;
// }

/* 
Exemple de Stars ramenées en HTML

<span className="star">&#9733;</span> 
*/
