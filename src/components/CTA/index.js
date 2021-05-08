import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

const CTA = ({ isTouchscreen }) => {
    return (
        <section className="text-white flex flex-col justify-between align-center text-center bg-blue-400 pt-8 sm:pt-20 px-4 pb-24 CTAclippedRect">
            <Fade top duration={800} delay={10} distance="10px">
                <h2 className="text-3xl pt-4 sm:pt-0">Contact</h2>
            </Fade>
            <Fade bottom duration={800} delay={150} distance="20px">
                <p className="mt-8 text-lg sm:text-xl">Send me a message - I'd love to hear from you!</p>
            </Fade>
            <Fade bottom duration={800} delay={180} distance="20px">
                <form method="POST" data-netlify="true" data-netlify-recaptcha="true" className="flex flex-col justify-center align-center text-center w-full max-w-2xl mt-8 h-80 mx-auto text-lg">
                    <input className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded text-left py-2 px-4" type="email" placeholder="Your email"/>
                    <textarea className="text-gray-600 h-40 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded text-left py-2 px-4 sm:mt-4" placeholder="Your message" />
                    <input type="submit" value="Let's Talk" className={`mt-6 text-white mx-auto w-40 py-3 px-7 border-solid border-4 border-white cursor-pointer text-xl bg-blue-400 ${!isTouchscreen ? 'CTAbtn' : ''}`} />
                </form>
                {/* <a className={`mt-4 sm:mt-12 text-white mx-auto w-40 py-3 px-7 border-solid border-4 border-white cursor-pointer text-xl CTAbtn" href="mailto:hh.stobo@gmail.com ${!isTouchscreen ? 'CTAbtn' : ''}`} title="hh.stobo@gmail.com">Let's Talk</a> */}
            </Fade>
        </section>
    )
}

export default CTA
