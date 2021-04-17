import React from 'react'

const ProjectCard = (props) => {
    const { project, idx } = props
    const { img, title, info, info2, url, repo } = project
    //use idx % 2 to reverse direction of every second project card
    const flexDirection = idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
    const textDirection = idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
    const marginDirectionImage = idx % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'
    const marginDirectionText = idx % 2 === 0 ? 'lg:ml-4' : 'lg:mr-4'
    return (
        <div className="mt-4 lg:mt-12 md:max-w-screen-md lg:max-w-screen-lg mx-auto">
            <h2 className="text-2xl py-8 lg:py-12">{title}</h2>
            <div className={`md:px-4 flex flex-col justify-evenly items-center md:items-start ${flexDirection}`}>
                <div className={`flex flex-col justify-evenly items-center w-11/12 md:w-3/6 md:justify-between md:h-full ${marginDirectionImage}`}>
                    <img className="lg:max-w-lg shadow-lg" src={img} alt="Screenshot of the app"></img>
                    <div className="flex flex-row justify-evenly items-center w-full pt-8 text-lg sm:text-xl">
                        <a className="text-blue-500 py-2 px-6 sm:py-3 sm:px-7 border-solid border-4 border-blue-400 whiteToBlueBtn" href={url} target="_blank" rel="noreferrer">See Live</a>
                        <a className="text-blue-500" href={repo} target="_blank" rel="noreferrer">Source Code</a>
                    </div>
                </div>
                <div className={`w-11/12 md:w-3/6 pt-8 md:pt-0 md:px-8 ${marginDirectionText}`}>
                    <p className={`py-4 sm:px-8 md:p-0 lg:pt-4 ${textDirection}`}>{info}</p>
                    <p className={`py-4 sm:px-8 md:p-0 md:pt-4 ${textDirection}`}>{info2}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
