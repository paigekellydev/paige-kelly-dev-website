import React from 'react'

export default function Project({project}) {
    return (
        <section>
            <h2>{project.name}</h2>
            <a>{project.videoLink}</a>
            <p>Description: {project.description}</p>
            <p>I used: {project.techStack}</p>
        </section>       
    )
}
