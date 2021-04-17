import React from 'react'
import './Hero.css'
import TypeWriter from './TypeWriter'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Hero = () => {
    const msgs = ['front-end', 'back-end', 'full-stack']
    return (
        <section className="h-screen flex flex-col justify-evenly items-center">
            <Fade top duration={1000} distance="20px">
                <div className="text-lg text-white sm:text-2xl heroText">
                    <p>Hello there! I’m<span className="font-semibold"> Hamish</span>.</p>
                    <p>I’m a <TypeWriter messages={msgs} /> web developer.</p>
                </div>
            </Fade>
            <Fade bottom duration={1000} delay={250} distance="30px">
                <Link to="about" smooth={true} duration={700} className="text-white text-xl py-3 px-7 border-solid border-4 border-white cursor-pointer CTAbtn">Find out more</Link>
            </Fade>
        </section>
    )
}

export default Hero
