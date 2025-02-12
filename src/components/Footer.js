import Link from 'next/link';
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date()
  return (
    <div className='bg-white'>
      <div className='footer-line'></div>
      <div className='px-5 footer-section1 py-3'>
        <div className='mt-3'>
          <Link href={'/'}>
            <img src='https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg' className='pointer' alt='brand' height={30} width={192} /></Link>
        </div>
        <div className='mt-3 footer-other-items'>
          <h3 className='footer-item'>Termas & Conditions</h3>
          <h3 className='footer-item' >Privacy Policy</h3>
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='px-5 footer-section2 py-5'>
        <span className='footer-bottom mt-2'> &copy; {currentDate.getFullYear()}. Unlisted Shares India. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer