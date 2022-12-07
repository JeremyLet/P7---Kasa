import "../assets/styles/Rate.css";
// import { useState } from "react";

/* Composant STAR */

function Star() {
	return <span className="Star">&#9733;</span>;
}

/* Function / Composant pour ramener la star de la bonne couleur */

// const StarRate = () => {
// 	const [rating, setRating] = useState(0);
// 	console.log(rating);
// 	return (
// 		<div className="star-rating">
// 			{[...Array(5)].map((star, index) => {
// 				return (
// 					<span key={index} className="ZeroStar">
// 						{rating}
// 					</span>
// 				);
// 			})}
// 		</div>
// 	);
// };
export default Star;
