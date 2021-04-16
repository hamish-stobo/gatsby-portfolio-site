import React from 'react'
import profile from '../../images/profile.jpg'

const About = () => {
    return (
        <section className="bg-blue-400 pt-20 pb-32 sm:pb-40 clippedRect">
            <div className="p-8 sm:py-12 rounded-sm bg-white shadow-lg w-11/12 max-w-screen-sm mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                <img src={profile} alt="Website author" className="w-60 shadow-md sm:mr-4"/>
                <div className="flex flex-col justify-around items-center sm:ml-4">
                    <h2 className="text-3xl pt-4 sm:pt-0">About Me</h2>
                    <p className="text-sm md:text-base pt-4">I'm passionate about building useful software to solve real-world problems while providing users with an engaging experience.</p>
                    <p className="text-sm md:text-base pt-4">I'm passionate about building useful software to solve real-world problems while providing users with an engaging experience.</p>
                </div>
            </div>
        </section>
    )
}

export default About
