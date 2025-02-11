"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBriefcase, FaCogs, FaFileSignature, FaHeadphones, FaHome, FaUserAlt } from "react-icons/fa";
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const pathName = usePathname();
  // console.log("pathName", pathName)
  return (
    <div className='header-brand'>
      <Link href={'/'}>
        <h3 className='pointer brand-name'><span className='brand-name1'>SARTAJ</span><span className='brand-name2'>ALAM</span></h3></Link>
      <div className='flex my-2 header-item-div'>
        <Link href={'/'}>
          <span className={`header-item${pathName === '/' ? "-active" : ""} flex`}> <FaHome className='mt-1 mx-1' style={{ fontSize: "23px" }} /> Home </span></Link>
        <Link href={'/work-experience'}>
          <span className={`header-item${pathName === '/work-experience' ? "-active" : ""} mx-1 flex`}><FaBriefcase className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Work</span>
        </Link>
        <Link href={'/projects'}>
          <span className={`header-item${pathName === '/projects' ? "-active" : ""} flex`}><FaFileSignature className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Projects</span>
        </Link>
        <Link href={'/skills'}>
          <span className={`header-item${pathName === '/skills' ? "-active" : ""} mx-1 flex`}><FaCogs className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Skills</span>
        </Link>
        <Link href={'/about'}>
          <span className={`header-item${pathName === '/about' ? "-active" : ""} flex`}><FaUserAlt className='mt-2 mx-1' style={{ fontSize: "20px" }} /> About</span>
        </Link>
        <Link href={'/contact'}>
          <span className={`header-item${pathName === '/contact' ? "-active" : ""} mx-1 flex`}><FaHeadphones className='mt-2 mx-1' style={{ fontSize: "20px" }} /> Contact</span>
        </Link>
      </div>
      <div className='header-hamberger'>
        <div className='hamberger'>
        <MobileSidebar />
        </div>
      </div>
    </div>
  )
}

export default Header