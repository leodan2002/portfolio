import React from 'react'
import Resume from '../../Images/resume.png'
import "./ResumePage.css"

function ResumePage() {
    return (
        <div>
            <h1>Resume Page</h1>
            <div className="resume-wrapper">
                <img src={Resume} alt="resume" />
            </div>
        </div>
    )
}

export default ResumePage
