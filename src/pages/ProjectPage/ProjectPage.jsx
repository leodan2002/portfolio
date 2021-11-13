import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import CovidStater from '../../Images/covid_image.png'
import ReactLogo from '../../Images/react-logo.png'
import PythonLogo from '../../Images/python-logo.png'
import JavaScriptLogo from '../../Images/javascript-logo.png'


function ProjectPage() {
    return (
        <div>
            <h1>Project Page</h1>
            < ProjectCard 
                image={CovidStater} 
                heading="Covid Tracker"  
                toolsList={[ReactLogo, JavaScriptLogo]} 
                descript="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates porro laboriosam delectus eos reiciendis inventore laudantium quos quibusdam atque placeat!"
                codeLink="https://github.com/leodan2002" 
                demoLink="https://github.com/leodan2002"/>
        </div>
    )
}
export default ProjectPage
