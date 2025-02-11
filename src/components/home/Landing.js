"use client"
import React, { useState } from 'react'
import landingImg from '../../assets/landingImg/landing.jpg'
import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
    const [isNumberCopied, setIsNumberCopied] = useState(false);

    const copyMobileNoToClipboard = () => {
        navigator.clipboard.writeText("+919958564890");
        setIsNumberCopied(true)
        setTimeout(() => setIsNumberCopied(false), 2500)
    };

    return (
        <div className='landing-section'>
            <div className='landing-section1'><Image src={landingImg} width={600} height={400} alt='landing image' /> </div>
            <div className='landing-section2'>
                <h1>
                    <Typewriter
                        words={["Hi, I'm Sartaj Alam."]}
                        loop={1} // Set to true if you want the effect to loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={150} // Typing speed in ms
                        deleteSpeed={150} // Deleting speed in ms
                        delaySpeed={1000} // Delay before typing starts again
                    />
                </h1>
                <h1>A Full Stack Web Developer.</h1>
                <p className='mt-3'>
                    As a Web Developer, I build scalable, full-stack web applications with MongoDB, Express.js, React, and Node.js. I focus on delivering responsive, interactive, and efficient solutions while adhering to clean code and best practices. Passionate about innovation, I stay updated with the latest web technologies to create robust applications.
                </p>
                <div className='mt-5'>
                    <span className='resume-download'><a href='https://drive.google.com/file/d/11_B2NTzYyvlynrw9XSXtQIRMGbR8STKx/view' target='_blank'>MY RESUME</a></span>
                    <a
                        href="mailto:sartaj2394@gmail.com?subject=Want%20to%20work%20with%20us?&body=Hello%2C%20I%20would%20like%20to%20connect."
                    > <span className='email-me'>EMAIL ME</span></a>
                    <a href="tel:+91 99585 64890" className='show-in-mobile-view'>
                        <span className='call-me'>CALL ME</span>
                    </a>
                    <span className='call-me show-in-desktop-view' onClick={copyMobileNoToClipboard}>CALL ME</span>
                </div>
                <div className='mt-2'>{isNumberCopied ? <small className='text-danger my-2 p-2 show-in-desktop-view'>Phone number copied to clipboard!</small> : ""}</div>
            </div>
        </div>
    )
}

export default Landing