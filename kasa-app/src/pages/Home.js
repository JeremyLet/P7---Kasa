import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import BannerLandingImage from "../assets/images/BannerLandingImage.png";

const Home = () => {
	return (
		<div>
			<Banner image={BannerLandingImage} CTA="Chez vous, partout et ailleurs" />
			<Gallery />
			<Footer />
		</div>
	);
};

export default Home;
