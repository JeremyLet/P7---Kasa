import { Outlet, Link } from "react-router-dom";
import "../assets/styles/Layout.css";
import LogoHeader from "../components/LogoHeader.js";

const Layout = () => {
	return (
		<>
			<header>
				<LogoHeader />
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/About">A propos</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Outlet />
		</>
	);
};

export default Layout;
