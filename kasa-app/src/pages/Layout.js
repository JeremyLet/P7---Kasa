import { Outlet, Link } from "react-router-dom";
import LOGOHeader from "../assets/images/LOGOHeader.png";
import "../assets/styles/Layout.css";

const Layout = () => {
	return (
		<>
			<header>
				<img src={LOGOHeader} alt="logo-kasa" className="LOGOHeader" />
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
