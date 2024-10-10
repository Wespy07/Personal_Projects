import React from 'react';

function StatusSelection({ onChange }) {
    return (
        <div className='bg-indigo-400 rounded-lg py-7 px-5'>
            <h4 className='font-medium mb-3'>Status</h4>
            {['Started', 'In Progress', 'Finished'].map(status => (
                <label key={status} className="px-2 py-1 bg-transparent cursor-pointer">
                    <input
                        type="radio"
                        name="status"
                        value={status}
                        className="hidden peer"
                        onChange={onChange}
                        required
                    />
                    <span className="peer-checked:bg-fuchsia-600 peer-checked:border-fuchsia-600 peer-checked:text-white px-2 rounded-md py-1 border-[1px] border-indigo-700">
                        {status}
                    </span>
                </label>
            ))}
        </div>
    );
}

export default StatusSelection;
