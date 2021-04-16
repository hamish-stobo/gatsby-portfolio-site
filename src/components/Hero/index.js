import React from 'react'
import './Hero.css'
import TypeWriter from './TypeWriter'

const Hero = () => {
    const msgs = ['front-end', 'back-end', 'full-stack']
    return (
        <section className="text-lg h-screen flex flex-col justify-evenly items-center heroSection">
            <div>
                <p>Hi, I’m<span className="text-blue-500"> Hamish.</span></p>
                <p>I’m a <TypeWriter messages={msgs} /> web developer.</p>
            </div>
            <button>Find out more</button>
        </section>
    )
}

export default Hero
