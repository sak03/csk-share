// pages/index.js
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
                className="p-2 text-xl text-black rounded-md lg:hidden"
                onClick={toggleSidebar}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 white-bg text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden`}
                    style={{zIndex:99999999999999}}
            >
                <ul className="flex flex-col p-4 space-y-4 mt-5">
                    <li>
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
            </div>

            {/* Overlay (optional, for dimming the background) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-20"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
export default MobileSidebar
