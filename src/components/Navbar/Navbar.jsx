import React from 'react'
import './Navbar.css'

function Navbar() {
	return (
		<div className="navigation-wrapper">
			<div className="logo">
				<h1>Logo</h1>
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
