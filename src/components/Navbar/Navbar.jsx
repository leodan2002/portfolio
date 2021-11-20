import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
import LogoName from '../../Images/logo_name.png'


function Navbar() {

	const [colorPage, setColorPage] = useState("Home");



	return (
		<div className="navigation-wrapper">
			<div className="logo">
				<a href="/">
					<img className="logo_image" src={LogoName} alt="logo" />
				</a>
			</div>
			<div className="navigation-buttons">
				<Link to="/" className={`page-button ${colorPage === "Home" ? " color-link" : ""}`} onClick={() => setColorPage("Home")}>Home</Link>
				<Link to="/skills" className={`page-button ${colorPage === "Skills" ? " color-link" : ""}`} onClick={() => setColorPage("Skills")}>Skills</Link>
				<Link to="/projects" className={`page-button ${colorPage === "Projects" ? " color-link" : ""}`} onClick={() => setColorPage("Projects")}>Projects</Link>
				<Link to="/resume" className={`page-button ${colorPage === "Resume" ? " color-link" : ""}`} onClick={() => setColorPage("Resume")}>Resume</Link>
				<Link to="/contact" className={`page-button ${colorPage === "Contact" ? " color-link" : ""}`} onClick={() => setColorPage("Contact")}>Contact</Link>	
				
			</div>
		</div>
	)
}

export default Navbar
