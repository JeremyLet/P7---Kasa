import Section1 from "../components/Section1";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import BannerLandingImage from "../assets/images/BannerLandingImage.png";

const Home = () => {
	return (
		<div>
			<Section1
				image={BannerLandingImage}
				CTA="Chez vous, partout et ailleurs"
			/>
			<Gallery />
			<Footer />
		</div>
	);
};

export default Home;
