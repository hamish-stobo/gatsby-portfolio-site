import React from 'react'
import projectsData from './projectsData'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section>
            <div className="text-3xl pt-8 h-24">
                Project Showcase
            </div>
            <div className="sm:pt-4">
                {
                projectsData.map(( project, idx ) => {
                    const key = idx + project.id
                    return <ProjectCard key={key} project={ project } idx={idx} />
                })
                }
            </div>
        </section>
    )
}

export default Projects
