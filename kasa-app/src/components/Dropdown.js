import "../assets/styles/componentsStyles/Dropdown.css";
import VectorUP from "../assets/images/VectorUP.svg";
import VectorDOWN from "../assets/images/VectorDOWN.svg";
import { useState } from "react";

export default function Dropdown(props) {
	const [selected, setSelected] = useState(null);

	const toggle = (e) => {
		if (selected === "OK") {
			return setSelected(null);
		}
		setSelected("OK");
	};

	return (
		<div className="wrapper">
			<div className="accordeon">
				<div className="item">
					<div className="item__title" onClick={() => toggle()}>
						<h2 className="item__title--text">{props.title}</h2>
						<span className="item__title--vector">
							{selected === "OK" ? (
								<img src={VectorUP} alt="vectorUp" />
							) : (
								<img src={VectorDOWN} alt="vectorDown" />
							)}
						</span>
					</div>
					<div className={selected === "OK" ? "content-show" : "content"}>
						{props.details}
					</div>
				</div>
			</div>
		</div>
	);
}
