import React, { useState } from 'react';
import SideMenu from './SideMenu';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        // console.log('Menu toggled, new state:', !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='w-full bg-indigo-950 relative z-10 border-b-[1px] border-indigo-500'>
            <nav className='max-md:flex-col max-md:px-5 max-md:justify-center max-md:items-start max-w-[1200px] mx-auto h-20 bg-indigo-950 flex items-center justify-between px-10 text-xl'>
                <a href='/' className='text-purple-400 cursor-pointer hover:scale-110 transition-all duration-300 text-4xl'>TaskMaster</a>
                <h2 className='mr-10 cursor-default text-white max-md:text-sm'>Plan your <span className='text-emerald-400 text-2xl max-md:text-xl'>day</span>, plan your <span className='text-emerald-400 text-2xl max-md:text-xl'>Life</span></h2>
            </nav>

            {/* Menu toggle button */}
            <div className='absolute top-5 right-5 text-2xl text-white'>
                <i className="fa-solid fa-bars cursor-pointer" onClick={toggleMenu}></i>
            </div>

            {/* Pass the isMenuOpen state to SideMenu */}
            <SideMenu isMenuOpen={isMenuOpen} onClose={toggleMenu} />
        </div>
    );
}

export default Navbar;
