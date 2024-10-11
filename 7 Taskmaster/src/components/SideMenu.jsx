import React from 'react';

function SideMenu({ isMenuOpen, onClose }) {
    return (
        <aside className={`fixed top-0 right-0 max-md:w-2/3 max-md:h-full max-md:bg-indigo-950 max-md:text-white max-md:shadow-lg max-md:z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} h-full bg-slate-950 w-1/6 text-white py-5 px-2 flex flex-col justify-between`} 
        >
            {/* Close button for small screens */}
            <div className='text-right px-3 py-0'>
                <i className="fa-solid fa-xmark text-2xl cursor-pointer" onClick={onClose}></i>
            </div>

            <div className='flex flex-col h-full justify-between px-2 py-5'>
                <div>
                    <div className='bg-[#332f70] px-5 py-4 rounded-xl'>
                        <h3 className='text-lg font-bold'>Status</h3>
                        <h4 className='px-2 py-1 mt-2 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>Not Started</h4>
                        <h4 className='px-2 py-1 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>In Progress</h4>
                        <h4 className='px-2 py-1 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>Finished</h4>
                    </div>

                    <div className='bg-[#332f70] px-5 py-4 rounded-xl mt-5'>
                        <h3 className='text-lg font-bold'>Priority</h3>
                        <h4 className='px-2 py-1 mt-2 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>High</h4>
                        <h4 className='px-2 py-1 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>Medium</h4>
                        <h4 className='px-2 py-1 hover:bg-indigo-800 cursor-pointer rounded-md hover:scale-110 transition-all duration-300'>Low</h4>
                    </div>
                </div>
                <h3 className='max-lg:text-[10px] text-center text-sm'>Made with ❤️️ by <a href="https://github.com/Wespy07" target='_blank' className='underline'>Wespy</a></h3>
            </div>
        </aside>
    );
}

export default SideMenu;
