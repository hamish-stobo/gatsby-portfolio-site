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
                <form onSubmit="submit" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="flex flex-col justify-center align-center text-center w-full max-w-2xl mt-8 h-80 mx-auto text-lg">
                    <input type="hidden" name="form-name" value="contact"></input>
                    <label htmlFor="email" className="self-start" >Email address</label>
                    <input id="email" autocomplete="email" required className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded text-left py-2 px-4" type="email" name="email"/>
                    <label for="message" className="self-start mt-2" >Your message</label>
                    <textarea required id="message" name="message" className="text-gray-600 h-40 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent rounded text-left py-2 px-4" />
                    <button type="submit" className={`mt-6 text-white mx-auto w-40 py-3 px-7 border-solid border-4 border-white cursor-pointer text-xl bg-blue-400 ${!isTouchscreen ? 'CTAbtn' : ''}`}>Let's Talk</button>
                </form>
            </Fade>
        </section>
    )
}

export default CTA
