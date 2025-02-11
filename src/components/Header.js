"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const pathName = usePathname();
  return (
    <div className='header-brand header-padding'>
      <Link href={'/'}>
        <img src='https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg' className='pointer' alt='brand' height={30} width={192} /></Link>
      <div className='flex my-2 header-item-div'>
        <Link href={'/skills'}>
          <span className={`header-item${pathName === '/unlisted-shres' ? "-active" : ""} mx-1 flex`}>Unlisted Shares</span>
        </Link>
        <Link href={'/about'}>
          <span className={`header-item${pathName === '/our-blogs' ? "-active" : ""} flex`}> Our Blogs</span>
        </Link>
        <Link href={'/contact'}>
          <span className={`header-item${pathName === '/contact-us' ? "-active" : ""} mx-1 flex`}>Contact Us</span>
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