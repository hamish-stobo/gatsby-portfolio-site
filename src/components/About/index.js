import React from 'react'
import Fade from 'react-reveal/Fade'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    return (
        <section id="about" className="bg-blue-400 pt-20 pb-32 sm:pb-40 clippedRect mx-auto text-center min-h-full">
            <Fade bottom duration={800} delay={100} distance="10px">
                <div className="p-8 sm:py-12 rounded-sm bg-white shadow-lg max-w-md sm:max-w-screen-md mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                    <Fade left duration={800} delay={200} distance="30px">
                        <StaticImage src='../../images/profile.png' alt="Website author" placeholder="blurred" layout="fullWidth" className="w-60 shadow-md sm:mr-4"/>
                    </Fade>
                    <Fade right duration={800} delay={250} distance="30px">
                        <div className="flex flex-col justify-around items-center sm:ml-4">
                            <h2 className="text-3xl pt-4 sm:pt-0">About Me</h2>
                            <p className="text-sm md:text-base pt-4">I'm a ServiceNow Consultant and web developer. When I'm not coding, you can find me playing piano &#x1f3b9;, out running &#x1F3C3; or sipping craft beers &#x1F37A;.</p>
                            <p className="text-sm md:text-base pt-4">Tools I use include Figma and ReactJS for crafting charming user interfaces, Node.js and Express for developing RESTful APIs, and a SQL RDBMS such as PostgreSQL for provisioning databases.</p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </section>
    )
}

export default About
