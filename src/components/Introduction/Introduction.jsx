import "./Introduction.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { IconContext } from "react-icons/";

const Introduction = () => {
	return (
		<>
			<h1 className="name">An Hoang</h1>
			<div className="software-engineer">
				{" "}
				&gt; Hi! I'm a Computer Science Student <div id="blinking-cursor"></div>{" "}
			</div>
			<p className="description-text white-border">
				Check out the code of this website using React.js:{" "}
				<a
					className="inline-link"
					href="https://github.com/leodan2002/portfolio"
					rel="noreferrer"
					target="_blank"
				>
					Code
				</a>
			</p>

			<div className="media-link-wrapper">
				<IconContext.Provider value={{ className: "media-icon" }}>
					<a
						rel="noreferrer"
						target="_blank"
						className="media-link"
						href="https://github.com/leodan2002"
					>
						<FaGithub />
						<p className="icon-description">GitHub</p>
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						className="media-link"
						href="https://www.linkedin.com/in/an-hoang-b05838202/"
					>
						<FaLinkedin />
						<p className="icon-description">LinkedIn</p>
					</a>
				</IconContext.Provider>
			</div>
		</>
	);
};

export default Introduction;