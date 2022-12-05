import { Outlet, Link } from "react-router-dom";
import "../assets/styles/Layout.css";
import LogoHeader from "../components/LogoHeader.js";

const Layout = () => {
	return (
		<>
			<header className="LayoutHeader">
				<LogoHeader />
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
