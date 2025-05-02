import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";  // Importing menu icons
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom for navigation

const Navbar = () => {
    // State to control whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State to track the active link in the navigation (highlighting current section)
    const [activeLink, setActiveLink] = useState('#home');

    // Array containing navigation links
    const navLinks = [
        { href: '#home', label: "Home" },
        { href: '#about', label: "About" },
        { href: '#services', label: "Services" },
        { href: '#sample', label: "Sample" } // Add other links as needed
    ];

    return (
        // Main navigation container with styling for fixed position and backdrop
        <nav className='fixed top-0 left-0 right-0 bg-green-50/80 backdrop-blur-sm z-50 border-b border-green-100 shadow-sm'>

            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20'>
                
                {/* Logo section: Display logo and brand name */}
                <div className='flex items-center gap-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300'>
                    <img src="/logo.jpg" alt="Powerline Logo" className="h-10 w-auto" />
                    <span className='text-lg font-semibold text-green-700'>POWERLINE</span>
                </div>

                {/* Mobile menu button (for small screen sizes) */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                    {
                        // Toggle the menu icon based on whether the menu is open or closed
                        isMenuOpen ? <HiX className='size-6' /> : <HiMenu />
                    }
                </button>

                {/* Desktop navigation items (only visible on medium to large screens) */}
                <div className='hidden md:flex items-center gap-10'>
                    {
                        // Iterate over the navLinks array and create a link for each item
                        navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)} // Update active link on click
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-600 after:transition-all ${
                                    activeLink === link.href ? "text-green-600 after:w-full" : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                {/* Login button (only visible on medium to large screens) */}
                <button className='hidden md:block bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-green-100'>
                    <Link to="/login">Login</Link>
                </button>

            </div>

            {/* Mobile menu items (only visible when the mobile menu is open) */}
            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-4'>
                        {
                            // Iterate over navLinks to create mobile version of the navigation
                            navLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.href); // Set active link on click
                                        setIsMenuOpen(false); // Close the mobile menu after selecting a link
                                    }}
                                    className={`block text-sm font-medium py-2 ${
                                        activeLink === link.href ? "text-green-600" : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))
                        }
                        {/* Mobile Login button */}
                        <button className='w-full bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-green-100'>
                            <a href="#login">Login</a>
                        </button>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
