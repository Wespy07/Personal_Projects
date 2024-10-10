import React from 'react';

function Navbar() {
    return (
        <div className='w-full bg-indigo-950 relative z-10 border-b-[1px] border-indigo-500'>
            <nav className='max-w-[1200px] mx-auto h-20 bg-indigo-950 flex items-center justify-between px-10 text-xl'>
                <a href='/' className='text-purple-400 text-3xl cursor-pointer'>TaskMaster</a>
                <h2 className='cursor-default text-white'>
                    Plan your <span className='text-emerald-400 text-2xl'>day</span>, plan your <span className='text-emerald-400 text-2xl'>Life</span>
                </h2>
            </nav>
        </div>
    );
}

export default Navbar;
