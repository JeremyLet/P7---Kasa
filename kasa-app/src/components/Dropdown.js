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
		<div className="dropdown">
			<div className="dropdown__accordeon">
				<div className="dropdown__item">
					<div className="item__title" onClick={() => toggle()}>
						<h2 className="item__title--text">{props.title}</h2>
						<span className="item__title--vector">
							{selected === "OK" ? (
								<img src={VectorUP} alt="vectorUp" className="vectorUp" />
							) : (
								<img src={VectorDOWN} alt="vectorDown" className="vectorDown" />
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
