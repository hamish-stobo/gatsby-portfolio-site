import React from 'react'
import Fade from 'react-reveal/Fade'
import ProjectImg from '../ProjectImg'

const ProjectCard = (props) => {
    const { project, idx } = props
    const { img, title, info, info2, infoButton, liveButton } = project
    //use idx % 2 to reverse direction of every second project card
    const isEven = idx % 2 === 0
    const isOdd = idx % 2 !== 0
    const flexDirection = isEven ? 'md:flex-row' : 'md:flex-row-reverse'
    const textDirection = isEven ? 'md:text-left' : 'md:text-right'
    const marginDirectionImage = isEven ? 'lg:mr-4' : 'lg:ml-4'
    const marginDirectionText = isEven ? 'lg:ml-4' : 'lg:mr-4'
    const goToURL = (url) => { 
        const win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <div className="mt-4 lg:mt-12 md:max-w-screen-md lg:max-w-screen-lg mx-auto">
            <Fade top duration={800} delay={100} distance="10px">
                <h2 className="text-2xl py-8 lg:py-12">{title}</h2>
            </Fade>
            <div className={`md:px-4 flex flex-col justify-evenly items-center md:items-start ${flexDirection}`}>
            <Fade left={isEven} right={isOdd} duration={800} delay={250} distance="30px">
                <div className={`flex flex-col justify-evenly items-center w-11/12 md:w-3/6 md:justify-between md:h-full ${marginDirectionImage}`}>
                    <ProjectImg  filename={img} />
                    <div className="flex flex-row justify-evenly items-center w-full pt-8 text-lg sm:text-xl">
                        <button onClick={() => goToURL(infoButton.url)} className={`border-4 rounded-sm bg-white shadow p-4 w-40 ${infoButton.disabled ? 'border-gray-400 text-gray-400 cursor-default' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`} rel="noreferrer">{infoButton.label}</button>
                        <button onClick={() => goToURL(liveButton.url)} className={`border-4 rounded-sm text-white shadow p-4 w-40 ${liveButton.disabled ? 'bg-gray-400 border-gray-400 cursor-default' : 'border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-white hover:shadow-none'}`} rel="noreferrer" disabled={liveButton.disabled}>{liveButton.label}</button>
                    </div>
                </div>
            </Fade>
            <div className={`w-11/12 md:w-3/6 pt-8 md:pt-0 md:px-8 ${marginDirectionText}`}>
                <Fade right={isEven} left={isOdd} duration={800} delay={300} distance="30px">
                    <p className={`py-4 sm:px-8 md:p-0 lg:pt-4 ${textDirection}`}>{info}</p>
                </Fade>
                <Fade right={isEven} left={isOdd} duration={800} delay={320} distance="30px">
                <p className={`py-4 sm:px-8 md:p-0 lg:pt-4 ${textDirection}`}>{info2}</p>
                </Fade>
            </div>
            
            </div>
        </div>
    )
}

export default ProjectCard
