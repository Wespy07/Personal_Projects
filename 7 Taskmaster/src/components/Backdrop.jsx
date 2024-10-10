import React from 'react'

function Backdrop() {
    return (
        <div className='h-[calc(100vh-5.05rem)] absolute w-[calc(100vw-16.66%)] right-0 bg-[#a483f15d] flex justify-center items-center'>
            <h1 className='text-9xl text-indigo-950 opacity-20 absolute cursor-default'>TaskMaster</h1>
        </div>
    )
}

export default Backdrop