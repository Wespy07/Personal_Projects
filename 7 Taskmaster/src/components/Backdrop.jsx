import React from 'react'

function Backdrop() {
    return (
        <div className='w-full h-[calc(100vh-5.05rem)] absolute right-0 bg-[#a483f15d] flex justify-center items-center'>
            <h1 className='text-9xl text-indigo-950 opacity-20 absolute cursor-default max-md:text-8xl max-sm:text-7xl'>TaskMaster</h1>
            <ul className='absolute bottom-0'>
                <li>Click on <b>Priority</b> to change priority</li>
                <li>Click on <b>Status</b> to change status</li>
            </ul>
        </div>
    )
}

export default Backdrop