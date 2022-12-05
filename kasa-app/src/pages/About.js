import Banner from "../components/Banner";
import InfoBar from "../components/InfoBar";
import BannerAboutImage from "../assets/images/BannerAboutImage.png";
import VectorDOWN from "../assets/images/VectorDOWN.svg";

const About = () => {
	return (
		<div>
			<Banner image={BannerAboutImage} />
			<InfoBar title="Fiabilité" details="" vector={VectorDOWN} />
			<InfoBar
				title="Respect"
				details="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				vector={VectorDOWN}
			/>
			<InfoBar title="Service" details="" vector={VectorDOWN} />
			<InfoBar title="Responsabilité" details="" vector={VectorDOWN} />
		</div>
	);
};

export default About;
