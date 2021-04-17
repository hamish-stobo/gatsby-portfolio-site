import React from 'react'
import profile from '../../images/profile.jpg'
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <section id="about" className="bg-blue-400 pt-20 pb-32 sm:pb-40 clippedRect mx-auto text-center">
            <Fade bottom duration={800} delay={100} distance="10px">
                <div className="p-8 sm:py-12 rounded-sm bg-white shadow-lg max-w-md sm:max-w-screen-sm mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                    <Fade left duration={1000} delay={350} distance="30px">
                        <img src={profile} alt="Website author" className="w-60 shadow-md sm:mr-4"/>
                    </Fade>
                    <Fade right duration={1000} delay={420} distance="30px">
                        <div className="flex flex-col justify-around items-center sm:ml-4">
                            <h2 className="text-3xl pt-4 sm:pt-0">About Me</h2>
                            <p className="text-sm md:text-base pt-4">I'm passionate about building useful software to solve real-world problems while providing users with an engaging experience.</p>
                            <p className="text-sm md:text-base pt-4">I'm passionate about building useful software to solve real-world problems while providing users with an engaging experience.</p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </section>
    )
}

export default About
