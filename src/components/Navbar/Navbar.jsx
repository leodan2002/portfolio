import React from 'react'
import './Navbar.css'
import LogoName from '../../Images/logo_name.png'


function Navbar() {
	return (
		<div className="navigation-wrapper">
			<div className="logo">
				<a href="/">
					<img className="logo_image" src={LogoName} alt="logo" />
				</a>
			</div>
			<div className="navigation-buttons">
				<button className="page-button">Home</button>
				<button className="page-button">Skills</button>
				<button className="page-button">Projects</button>
				<button className="page-button">Resume</button>
				<button className="page-button">Contact</button>
			</div>
		</div>
	)
}

export default Navbar
