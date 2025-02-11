import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date()
  return (
    <div className='bg-white'>
      <div className='px-5 footer-section py-3'>
        <div className='mt-3'>
          <h3 className='footer-item'>Sartaj Alam</h3>
          <p className='footer-sub-item'>Your complete web solutions</p>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Expert In</h3>
          <p className='footer-sub-item'>Front End, Full Stack</p>
          <p className='footer-sub-item'>MERN Stack</p>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Important Links</h3>
          <p className='footer-sub-item'>Work, Projects</p>
          <p className='footer-sub-item'>Skills, About, Contact</p>
        </div>
        <div className='mt-3'>
          <h3 className='footer-item'>Follow me</h3>
          <div className='flex'>
          <a href='https://github.com/sak03' target='_blank' className='footer-sub-item-icon'><FaGithubSquare /></a>
          <a href='https://www.linkedin.com/in/sak03/' target='_blank' className='footer-sub-item-icon mx-2'><FaLinkedin /></a>
          <a href='https://x.com/sartaj_03' target='_blank' className='footer-sub-item-icon'><FaTwitterSquare /></a>
          </div>
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='px-5 footer-section py-5'>
        <span className='footer-bottom mt-2'> &copy; {currentDate.getFullYear()}</span>
        <span className='footer-bottom mt-2'>Made with love ❤️ by Sartaj</span>
        <span className='footer-bottom mt-2'>Maintained by @Sartaj</span>
      </div>
    </div>
  )
}

export default Footer