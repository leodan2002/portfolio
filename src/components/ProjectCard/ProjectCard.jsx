import React from 'react'
import "./ProjectCard.css"
import { FaExternalLinkAlt, FaGithub} from "react-icons/fa";

function ProjectCard(props) {
    const image = props.image;
    const heading = props.heading;
    const toolsList = props.toolsList;
    const descript = props.descript;
    const demoLink = props.demoLink;
    const codeLink = props.codeLink;
    return (
        <div className="project-card-wrapper">
            <div className="card-left">
                <img className="project-card-image" src={image}/>
            </div>
            <div className="card-right">
                <h3 className="project-title">{heading}</h3>
                <div className="made-with-section">
                    <h3 className="made-with-text">Made with: </h3>
                    {
                        toolsList.map((tool) => {
                            return <img className="tool-image" src={tool} />
                        })
                    }
                </div>
                <p className="descript-text">{descript}</p>
                <button className="link-projects-button">
                    <FaExternalLinkAlt />
                    <a className="link-button-text" href={demoLink}>Live</a>
                </button>
                <button className="link-projects-button">
                    <FaGithub />
                    <a className="link-button-text" href={codeLink}>CodeLink</a>
                </button>
            </div>            
        </div>
    )
}

export default ProjectCard
