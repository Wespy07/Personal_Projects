import React, { useState } from 'react'
import '../App.css'

function AgeCalculator() {

    // capture the user input dates
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    // set the user age and show defaults
    const [ageYears, setAgeYears] = useState('--')
    const [ageMonths, setAgeMonths] = useState('--')
    const [ageDays, setAgeDays] = useState('--')

    // error scenarios
    const [dayError, setDayError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)

    const currentDate = new Date()


    const calculateAge = (e) => {
        e.preventDefault();
    
        const birthDay = parseInt(day);
        const birthMonth = parseInt(month);
        const birthYear = parseInt(year);
    
        // Validate month
        if (birthMonth < 1 || birthMonth > 12) {
            setMonthError(true);
            return;
        } else {
            setMonthError(false);
        }
    
        // Validate year
        if (birthYear > currentDate.getFullYear()) {
            setYearError(true);
            return;
        } else {
            setYearError(false);
        }
    
        // Validate day
        let daysInMonth;
        if (birthMonth === 2) {
            daysInMonth = (birthYear % 4 === 0 && birthYear % 100 !== 0) || (birthYear % 400 === 0) ? 29 : 28;
        } else {
            daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30][birthMonth];
        }
        
        if (birthDay < 1 || birthDay > daysInMonth) {
            setDayError(true);
            return;
        } else {
            setDayError(false);
        }
    
        // Create birthDate
        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
        // Validate if birthDate is in the future
        if (birthDate > currentDate) {
            setYearError(true);
            return;
        } else {
            setYearError(false);
        }
    
        // Age calculation logic
        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();

        // Adjust for negative days
        if (ageDays < 0) {
            ageMonths--;
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            ageDays += prevMonth.getDate();
        }
    
        // Adjust for negative months
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
    
        // Update state
        setAgeYears(ageYears);
        setAgeMonths(ageMonths);
        setAgeDays(ageDays);
    }
    
    

    return (
        <div className='w-full h-screen bg-gradient-to-tr from-slate-900 via-indigo-900 to-[#0a531a] flex items-center justify-center '>
            {/* main container */}
            <div className='max-md:w-5/6 w-[650px] rounded-2xl rounded-br-[10rem] p-10 bg-gray-100'>

                <form onSubmit={calculateAge}>

                    {/* user input fields */}
                    <div className='flex gap-7 max-md:gap-1 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1'>
                        <div>
                            <p className='text-sm text-gray-500 font-bold ml-1'>Day</p>
                            <input type="number" required
                                onChange={(e) => {
                                    setDay(e.target.value);
                                    setDayError(false)
                                }}
                                placeholder='DD' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                            {dayError && <p className='text-xs text-red-500 font-medium ml-1'>Come on, no pressure </p>}
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 font-bold ml-1'>Month</p>
                            <input type="number" required
                                onChange={(e) => {
                                    setMonth(e.target.value);
                                    setMonthError(false)
                                }}
                                placeholder='MM' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                            {monthError && <p className='text-xs text-red-500 font-medium ml-1'>Try again, do better</p>}
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 font-bold ml-1'>Year</p>
                            <input type="number" required
                                onChange={(e) => {
                                    setYear(e.target.value);
                                    setYearError(false)
                                }}
                                placeholder='YY' className='border-[1px] border-gray-400 rounded-md px-2 py-3 w-[130px] placeholder:font-bold placeholder:text-2xl text-2xl' />
                            {yearError && <p className='text-xs text-red-500 font-medium ml-1'>Come to the present.</p>}
                        </div>
                    </div>

                    {/* line break and button */}
                    <div className='flex items-center justify-center'>
                        <div className='h-[2px] w-4/5 bg-purple-500' />
                        <button type='submit'>
                            <img src="https://xaoccc.github.io/project26/assets/images/icon-arrow.svg" className='bg-purple-600 rounded-full p-4 h-15 hover:bg-purple-800' />
                        </button>
                    </div>

                </form>


                {/* show the age */}
                <div>
                    <h2 className='text-7xl max-md:text-5xl max-sm:text-4xl italic font-bold text-gray-900'><span className='text-purple-600'>{ageYears}</span> years</h2>
                    <h2 className='text-7xl max-md:text-5xl max-sm:text-4xl italic font-bold text-gray-900'><span className='text-purple-600'>{ageMonths}</span> months</h2>
                    <h2 className='text-7xl max-md:text-5xl max-sm:text-4xl italic font-bold text-gray-900'><span className='text-purple-600'>{ageDays}</span> days</h2>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator