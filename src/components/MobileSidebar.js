// pages/index.js
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBriefcase, FaCogs, FaFileSignature, FaHeadphones, FaHome, FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";



const MobileSidebar = () => {
      const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Menu */}
            <button
                className="p-2 text-xl text-white dark-bg rounded-md lg:hidden"
                onClick={toggleSidebar}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 light-bg text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        {/* <Link href={'/'}>
                            <span className={`header-item${pathName === '/' ? "-active" : ""} flex`}> <FaHome className='mt-1 mx-1' style={{ fontSize: "23px" }} /> Home </span></Link> */}
                        <a href="#home" className="text-lg hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-lg hover:text-gray-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg hover:text-gray-400">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg hover:text-gray-400">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg hover:text-gray-400">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg hover:text-gray-400">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Overlay (optional, for dimming the background) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-0"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
export default MobileSidebar
