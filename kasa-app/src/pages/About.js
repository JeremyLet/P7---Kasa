import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Commercials from "../components/CTA";
import BannerAboutImage from "../assets/images/BannerAboutImage.png";
import VectorDOWN from "../assets/images/VectorDOWN.svg";

const About = () => {
	return (
		<div>
			<Section1 image={BannerAboutImage} />
			{[...Array(4)].map((index, nom) => {
				return (
					<div
						key={nom}
						className="Dropdown-About"
						style={{ width: "1240px", marginLeft: "20px" }}
					>
						<Dropdown
							key={nom}
							title={Commercials[nom].nom}
							details={Commercials[nom].details}
							vector={VectorDOWN}
						/>
					</div>
				);
			})}
			<Footer />
		</div>
	);
};

export default About;
