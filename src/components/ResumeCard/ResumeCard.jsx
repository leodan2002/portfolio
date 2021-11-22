import React from 'react'
import ResumeImage from '../../Images/resume.png'
import "./ResumeCard.css"


function ResumeCard() {
    return (
        <>
            <div>
                <div className="resume-wrapper">
                    <img className="resume-img" src={ResumeImage} alt="resume" />
                </div>
            </div>
        </>
    )
}

export default ResumeCard