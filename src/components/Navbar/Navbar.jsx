import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoName from '../../Images/logo_name.png'
import { FaHome, FaTools, FaCode, FaFile, FaEnvelope} from "react-icons/fa";

const Navbar = () => {
	const [pages, setPages] = useState({
		home: true,
		projects: false,
		resume: false,
		contact: false,
	});
	const [openHamburger, setOpenHamburger] = useState(false);

	const changePage = page => {
		const pages = {
			home: false,
			projects: false,
			resume: false,
			contact: false,
		};
		pages[page] = true;

		setPages(pages);
	};

	return (
		<>
			<nav className="navbar">
			<div className="logo">
				<a href="/">
					<img className="logo_image" src={LogoName} alt="logo" />
				</a>
			</div>
				<div
					className={
						openHamburger ? "hamburger ham-open" : "hamburger"
					}
					onClick={() => setOpenHamburger(!openHamburger)}
				>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</div>
				<div
					className={
						openHamburger ? "link-wrapper open" : "link-wrapper"
					}
				>
					<Link
						onClick={() => {
							changePage("home");
							setOpenHamburger(false);
						}}
						className={
							pages.home
								? "link small-link highlight"
								: "link small-link"
						}
						to="/"
					>
						<FaHome />
						Home
					</Link>
					<Link
						onClick={() => {
							changePage("skills");
							setOpenHamburger(false);
						}}
						className={
							pages.skills
								? "link small-link highlight"
								: "link small-link"
						}
						to="/skills"
					>
						<FaTools />
						Skills
					</Link>
					<Link
						onClick={() => {
							changePage("projects");
							setOpenHamburger(false);
						}}
						className={
							pages.projects
								? "link small-link highlight"
								: "link small-link"
						}
						to="/projects"
					>
						<FaCode />
						Projects
					</Link>
					<Link
						onClick={() => {
							changePage("resume");
							setOpenHamburger(false);
						}}
						className={
							pages.resume
								? "link small-link highlight"
								: "link small-link"
						}
						to="/resume"
					>
						<FaFile />
						Resume
					</Link>
					<Link
						onClick={() => {
							changePage("contact");
							setOpenHamburger(false);
						}}
						className={
							pages.contact
								? "link small-link highlight"
								: "link small-link"
						}
						to="/contact"
					>
						<FaEnvelope />
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;