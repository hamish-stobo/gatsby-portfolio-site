import React from 'react'
import './Hero.css'
import TypeWriter from './TypeWriter'

const Hero = () => {
    const msgs = ['front-end', 'back-end', 'full-stack']
    return (
        <section className="h-screen flex flex-col justify-evenly items-center">
            <div className="text-lg sm:text-xl heroText">
                <p>Hi, I’m<span className="text-blue-500"> Hamish.</span></p>
                <p>I’m a <TypeWriter messages={msgs} /> web developer.</p>
            </div>
            <a className="text-blue-400 text-xl py-3 px-7 border-solid border-4 border-blue-400 cursor-pointer whiteToBlueBtn">Find out more</a>
        </section>
    )
}

export default Hero
