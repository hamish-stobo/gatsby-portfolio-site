import React from 'react'

const CTA = () => {
    return (
        <section className="text-white flex flex-col justify-between align-center text-center bg-blue-400 pt-8 sm:pt-20 px-4 pb-24 CTAclippedRect">
            <h2 className="text-3xl pt-4 sm:pt-0">Contact</h2>
            <p className="mt-12 text-lg sm:text-xl">Click the button to send me an email. I'd love to hear from you!</p>
            <a className="mt-8 sm:mt-12 text-white mx-auto w-40 py-3 px-7 border-solid border-4 border-white text-xl" href="mailto:hh.stobo@gmail.com" title="hh.stobo@gmail.com">Let's Talk</a>
        </section>
    )
}

export default CTA
