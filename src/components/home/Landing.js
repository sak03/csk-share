"use client"
import React, { useState } from 'react'
import landingImg from '../../assets/landingImg/landing.jpg'
import Image from 'next/image';
// import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
    const [isNumberCopied, setIsNumberCopied] = useState(false);

    const copyMobileNoToClipboard = () => {
        navigator.clipboard.writeText("+919958564890");
        setIsNumberCopied(true)
        setTimeout(() => setIsNumberCopied(false), 2500)
    };

    return (
        <div className='landing-section'>
            <div className='landing-section2'>
            <h1>Chennai Super King (CSK) Shares</h1>
            </div>
        </div>
    )
}

export default Landing