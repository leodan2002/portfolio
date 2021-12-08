import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import CovidStater from '../../Images/covid_image.png'
import ReactLogo from '../../Images/react-logo.png'
import JavaScriptLogo from '../../Images/javascript-logo.png'
import JavaLogo from '../../Images/java-logo.png'
import JavaProjectImage from '../../Images/java-project-image.png'



function ProjectPage() {
    return (
        <div>
            <h1 className="page-header">My Projects</h1>
            < ProjectCard 
                image={CovidStater} 
                heading="Covid Tracker"  
                toolsList={[ReactLogo, JavaScriptLogo]} 
                descript="A React application that helps track the number of Covid cases across all the provinces in Canada, by fetching the data from the opencovid API."
                codeLink="https://github.com/leodan2002/covid-tracker" 
                demoLink="https://github.com/leodan2002/covid-tracker" //Live link
            />
            < ProjectCard 
                image={JavaProjectImage} 
                heading="Flight Reservation System"  
                toolsList={[JavaLogo]} 
                descript="An OOP Java-based project that simulates a flight reservation system that can help passengers with many activities including reserving or cancelling seats, printing all the flights, checking if seats are available, sorting aircraft and flights."
                codeLink="https://github.com/leodan2002/Flight_Reservation_System_P2" 
                demoLink="https://github.com/leodan2002/Flight_Reservation_System_P2"
            />
        </div>
        
    )
}
export default ProjectPage
