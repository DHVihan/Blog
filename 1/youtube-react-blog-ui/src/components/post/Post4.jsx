import { Link } from "react-router-dom";
import "./post4.css";

export default function Post4({ img }) {
	return (
		<div className="post">
			<img className="postImg" src={img} alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">
						<Link className="link" to="/posts?cat=Music">
							Music
						</Link>
					</span>
					<span className="postCat">
						<Link className="link" to="/posts?cat=life">
							Life
						</Link>
					</span>
				</div>
				<span className="postTitle">
					<Link to="/post/Post4" className="link">
						Lorem ipsum Post4
					</Link>
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
				fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
			</p>
		</div>
	);
}
