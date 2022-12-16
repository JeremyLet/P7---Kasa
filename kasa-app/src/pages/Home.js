import Section1 from "../components/Section1";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../assets/styles/pagesStyles/Home.css";

const Home = () => {
	return (
		<>
			<div className="Home">
				<Section1 CTA="Chez vous, partout et ailleurs" />
				<Gallery />
			</div>
			<Footer />
		</>
	);
};

export default Home;
