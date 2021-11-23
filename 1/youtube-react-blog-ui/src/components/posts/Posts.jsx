import Post from "../post/Post";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";
import Post5 from "../post/Post5";
import "./posts.css";
import one from "../singphoto/1.jpg";
import two from "../singphoto/2.jpg";
import three from "../singphoto/3.jpg";
import four from "../singphoto/4.jpg";
import five from "../singphoto/5.jpg";

export default function Posts() {
	return (
		<div className="posts">
			<Post img={one} />
			<Post2 img={two} />
			<Post3 img={three} />
			<Post4 img={four} />
			<Post5 img={five} />
		</div>
	);
}
