/**
 * Creating a layout for dynamically retrieving the header on each page
 * @param  { object }   ReactModules : Import Link and Outlek from react router
 * @param  { url }      Logo : importing the Kasa Logo for the Header
 * @return { function } Construction of the layout component
 */

import { Outlet, Link } from "react-router-dom";
import "../assets/styles/pagesStyles/Layout.css";
import LOGOH from "../assets/images/LOGOH.svg";

const Layout = () => {
	return (
		<>
			<header className="LayoutHeader">
				<img src={LOGOH} alt="LOGO" className="LOGO" />
				<nav className="LayoutHeader__Nav">
					<ul className="LayoutHeader__Nav--List">
						<li>
							<Link className="LayoutHeader__Nav--Links" to="/">
								Accueil
							</Link>
						</li>
						<li>
							<Link className="LayoutHeader__Nav--Links" to="/About">
								A propos
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Outlet />
		</>
	);
};

export default Layout;
