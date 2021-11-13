import React from 'react'
import "./ProjectCard.css"

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
                <h3>{heading}</h3>
                <div>
                    {
                        toolsList.map((tool) => {
                            return <img className="tool-image" src={tool} />
                        })
                    }
                </div>
                <p>{descript}</p>
                <button>
                    <a href={demoLink}>Demo Link</a>
                </button>
                <button>
                    <a href={codeLink}>CodeLink</a>
                </button>
            </div>            
        </div>
    )
}

export default ProjectCard
