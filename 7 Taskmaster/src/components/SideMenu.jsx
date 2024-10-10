import React, { useEffect, useState } from 'react'
// import { getQuote } from '../api/fetchquote'

function SideMenu() {
//     const [quote, setQuote] = useState('')

//     useEffect(() => {
//         fetch('https://zenquotes.io/api/today')
//         .then((res) => res.json())
//         .then((data) => setQuote(data))
// }, []);
    
//     console.log(quote)

    return (
        <aside className='h-[calc(100vh-5.05rem)] w-1/6 bg-indigo-950 text-white py-5 px-2 absolute flex flex-col justify-between'>
            <div>
                <div className='bg-[#332f70] px-12 py-4 rounded-xl'>
                    <h3 className='text-lg font-bold'>Status</h3>
                    <h4 className='px-2 pt-2'>Started</h4>
                    <h4 className='px-2 py-1'>In Progress</h4>
                    <h4 className='px-2 py-1'>Finished</h4>
                </div>

                <div className='bg-[#332f70] px-12 py-4 rounded-xl mt-5'>
                    <h3 className='text-lg font-bold'>Priority</h3>
                    <h4 className='px-2 pt-2'>High</h4>
                    <h4 className='px-2 py-1'>Medium</h4>
                    <h4 className='px-2 py-1'>Low</h4>
                </div>
            </div>
            <h3 className='text-center text-sm'>Made with ❤️️ by <a href="" className='underline'>Wespy</a></h3>
        </aside>
    )
}

export default SideMenu