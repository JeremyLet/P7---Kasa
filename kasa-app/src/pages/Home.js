import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import IMG from "../assets/images/IMG.png";

const Home = () => {
	return (
		<div>
			<Banner image={IMG} CTA="Chez vous, partout et ailleurs" />
			<Gallery />
			<Footer />
		</div>
	);
};

export default Home;
