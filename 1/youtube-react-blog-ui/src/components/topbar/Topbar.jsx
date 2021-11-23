import { Link } from "react-router-dom";
import mine from "./images/mine.jpeg";
import "./topbar.css";

export default function Topbar() {
	const user = true;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-f"></i>
				<i className="topIcon fab fa-instagram"></i>
				<i className="topIcon fab fa-linkedin"></i>
				<i className="topIcon fab fa-twitter"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/contact">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					{user && <li className="topListItem">LOGOUT</li>}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link className="link" to="/settings">
						<img className="topImg" src={mine} alt="" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
