import "../assets/styles/pagesStyles/About.css";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Commercials from "../back & data/CTA";
import VectorDOWN from "../assets/images/VectorDOWN.svg";

const About = () => {
	return (
		<>
			<div className="AboutBloc">
				<Section1 className="AboutBLoc__image" />
				<div className="AboutBloc__dropdowns">
					{[...Array(4)].map((index, nom) => {
						return (
							<Dropdown
								key={index}
								title={Commercials[nom].nom}
								details={Commercials[nom].details}
								vector={VectorDOWN}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
