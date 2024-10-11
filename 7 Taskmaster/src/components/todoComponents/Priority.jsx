import React from 'react';

function PrioritySelection({ onChange }) {
    return (
        <div className='bg-indigo-400 rounded-lg py-7 px-5 max-x-sm:px-3'>
            <h4 className='font-medium mb-3'>Priority</h4>
            {['High', 'Medium', 'Low'].map(priority => (
                <label key={priority} className="px-2 py-1 bg-transparent cursor-pointer max-sm:flex max-sm:text-sm">
                    <input
                        type="radio"
                        name="priority"
                        value={priority}
                        className="hidden peer"
                        onChange={onChange}
                        required
                    />
                    <span className="peer-checked:bg-indigo-700 peer-checked:text-white px-2 rounded-md py-1 border-[1px] border-indigo-700">
                        {priority}
                    </span>
                </label>
            ))}
        </div>
    );
}

export default PrioritySelection;
