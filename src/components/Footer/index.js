import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="bg-gray-700 text-center text-white py-4 w-full">
            <div className="flex flex-row justify-center align-center pb-4 text-2xl">
                <a className="px-4" href="https://github.com/hamish-stobo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="px-4" href="https://www.linkedin.com/in/hamishstobo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="px-4" href="https://twitter.com/hamishhs1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Hamish Stobo</p>
        </section>
    )
}

export default Footer
