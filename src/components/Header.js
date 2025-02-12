"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import MobileSidebar from './MobileSidebar';
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='header-brand header-padding'>
        <Link href={'/'}>
          <img src='https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg' className='pointer' alt='brand' height={30} width={192} /></Link>
        <div className='flex my-2 header-item-div'>
          <Link href={'/unlisted-shares'}>
            <span className={`header-item${pathName === '/unlisted-shares' ? "-active" : ""} mx-1 flex`}>Unlisted Shares</span>
          </Link>
          <Link href={'/our-blogs'}>
            <span className={`header-item${pathName === '/our-blogs' ? "-active" : ""} flex`}> Our Blogs</span>
          </Link>
          <Link href={'/contact-us'}>
            <span className={`header-item${pathName === '/contact-us' ? "-active" : ""} mx-1 flex`}>Contact Us</span>
          </Link>
        </div>
        <div className='header-hamberger'>
          <div className='hamberger'>
            <button
              className="p-2 text-xl text-black rounded-md lg:hidden"
              onClick={toggleSidebar}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className='show-in-mobile-view w-full'>
        {isOpen ?
          <div className='header-brand header-padding w-full'>
            <ul className="flex flex-col p-4 space-y-4">
              <li onClick={() => setIsOpen(false)}>
                <Link href={'/unlisted-shares'} className="text-lg text-black hover:text-gray-400">
                  Unlisted Shares
                </Link>
              </li>
              <li>
                <Link href="our-blogs" className="text-lg text-black hover:text-gray-400">
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-lg text-black hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div> : ""}
      </div>
    </>
  )
}

export default Header;