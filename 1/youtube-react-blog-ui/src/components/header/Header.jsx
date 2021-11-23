import "./header.css";
import homepage from "./images/unsplash.jpg";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">MERN Stack</span>
				<span className="headerTitleLg">BLOG</span>
			</div>
			<img className="headerImg" src={homepage} alt="" />
		</div>
	);
}
