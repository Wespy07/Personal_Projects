import React, { useState } from 'react'
import '../App.css'

function AgeCalculator() {
    const [day, setDay] = useState('')
    const [Month, setMonth] = useState('')
    const [year, setYear] = useState('') 
    const currentDate = new Date()

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()

    return (
        <div className='w-full h-screen bg-gradient-to-tr from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center '>
            {/* main container */}
            <div className='w-[650px] rounded-2xl rounded-br-[10rem] p-10 bg-gray-100'>

                {/* user input fields */}
                <div className='flex gap-7 '>
                    <div>
                        <p className='text-sm text-gray-500 font-bold ml-1'>Day</p>
                        <input type="number" onChange={(e) => setDay(e.target.value)} placeholder='DD' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                        <p className='text-xs text-red-500 font-medium ml-1 hidden'>This is required.</p>
                        <p className='text-xs text-red-500 font-medium ml-1 hidden'>Date Range: 1-31</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 font-bold ml-1'>Month</p>
                        <input type="number" onChange={(e) => setMonth(e.target.value)} placeholder='MM' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 font-bold ml-1'>Year</p>
                        <input type="number" onChange={(e) => setYear(e.target.value)} placeholder='YY' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                    </div>
                </div>

                {/* line break and button */}
                <div className='flex items-center justify-center'>
                    <div className='h-[2px] w-4/5 bg-purple-500' />
                    <button>
                        <img src="https://xaoccc.github.io/project26/assets/images/icon-arrow.svg" className='bg-purple-600 rounded-full p-4 h-15 hover:bg-purple-800' />
                    </button>
                </div>
                {/* show the age */}
                <div>
                    <h2 className='text-7xl italic font-bold text-gray-900'><span className='text-purple-600'>--</span> years</h2>
                    <h2 className='text-7xl italic font-bold text-gray-900'><span className='text-purple-600'>--</span> months</h2>
                    <h2 className='text-7xl italic font-bold text-gray-900'><span className='text-purple-600'>--</span> days</h2>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator