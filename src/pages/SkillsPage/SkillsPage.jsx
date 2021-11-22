import React from 'react'
import './SkillsPage.css'

// import BoostrapLogo from '../../Images/boostrap-logo.png'





function SkillsPage() {
    return (
        <div>
            <h1 className="page-header">My Skills</h1>
            
        <div className="skill-icons-wrapper">
            <ul className="skill-icons">
                <li className="skill-icons-li"><span class="iconify" data-icon="vscode-icons:file-type-html" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">HTML</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="vscode-icons:file-type-css" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">CSS</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="vscode-icons:file-type-scss2" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">SCSS</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:javascript" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">JavaScript</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:react" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">React</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:nodejs-icon" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">Node.js</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:python" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">Python</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:java" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">Java</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:git-icon" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">Git</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:bootstrap" data-inline="false" data-width="70px" data-height="70px"></span><span className="skill-description">Bootstrap</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="logos:mysql" data-inline="false" data-width="70" data-height="70"></span><span className="skill-description">MySQL</span></li>
                <li className="skill-icons-li"><span class="iconify" data-icon="flat-color-icons:linux" data-inline="false" data-width="70" data-height="70"></span><span className="skill-description">Linux</span></li>      
            </ul>
        </div>
    

        </div>
    )
}

export default SkillsPage


