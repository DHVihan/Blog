import { Link } from "react-router-dom";
import "./single5Post.css";
import img from "../singphoto/5.jpg";

export default function SinglePost5() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img className="singlePostImg" src={img} alt="" />
				<h1 className="singlePostTitle">
					Lorem ipsum Post5
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span>
						Author:
						<b className="singlePostAuthor">
							<Link className="link" to="/posts?username=Safak">
								Vihan
							</Link>
						</b>
					</span>
					<span>1 day ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
				</p>
			</div>
		</div>
	);
}
