/**
 * Creating the Home / Landing page for the project
 * @param  { url }      Components : Importing children components for the Home Page (Section, Gallery and Footer)
 * @param  { url }      Style : importing the CSS Style for Home Page
 * @return { function } Function : Creating the Home Page with necessary components
 */

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
