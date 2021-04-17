import React from 'react'
import './Hero.css'
import TypeWriter from './TypeWriter'

const Hero = () => {
    const msgs = ['front-end', 'back-end', 'full-stack']
    return (
        <section className="h-screen flex flex-col justify-evenly items-center">
            <div className="text-lg text-white sm:text-2xl heroText">
                <p>Hello there! I’m<span className="font-semibold"> Hamish.</span></p>
                <p>I’m a <TypeWriter messages={msgs} /> web developer.</p>
            </div>
            <a className="text-white text-xl py-3 px-7 border-solid border-4 border-white cursor-pointer CTAbtn">Find out more</a>
        </section>
    )
}

export default Hero
