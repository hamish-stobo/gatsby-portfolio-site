import React from 'react'
import projectsData from './projectsData'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade'

const Projects = () => {
    return (
        <section>
            <Fade top duration={800} delay={150} distance="10px">
                <div className="text-3xl pt-8 h-24">
                    Project Showcase
                </div>
            </Fade>
            <div className="sm:pt-4 pb-8 md:pb-16">
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
