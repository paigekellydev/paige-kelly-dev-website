import React from 'react'
import Project from './Project'

export default function Projects() {

    
    const displayProjects = () => {
        const projects = [
            {
                name: "MyCue",
                videoLink: "",
                description: "MyCue description",
                techStack: "JS, React"
            },
            {
                name: "Curb Your Enthusiasm API",
                videoLink: "",
                description: "Curb description",
                techStack: "JS, React, Ruby"
            },
            {
                name: "Colorado Modular Synth Society",
                videoLink: "",
                description: "CMSS description",
                techStack: "JS, React, Ruby"
            }
        ]
        return projects.map(project => {
            return (
                <Project project={project} />
            )
        })
    }
    return (
        <section>
            <h2>My projects</h2>
            {displayProjects()}
        </section>
    )
}
