import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

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
				<Link
					onClick={() => changePage("home")}
					className="link big-link"
					to="/"
				>
					&lt;Tanson Lee /&gt;
				</Link>
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
						Home
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
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;