import { Outlet, Link } from "react-router-dom";
import LOGO from "../assets/images/LOGO.png";
import "../assets/styles/Layout.css";

const Layout = () => {
	return (
		<>
			<header>
				<img src={LOGO} alt="logo-kasa" className=".LOGO" />
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
