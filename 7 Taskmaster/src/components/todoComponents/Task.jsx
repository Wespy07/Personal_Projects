import React, { useState } from 'react';
import PrioritySelection from './Priority';
import StatusSelection from './Status';

function TaskForm({ onSubmit }) {
    const [taskData, setTaskData] = useState({
        task: '',
        priority: 'Low', // Default value
        status: 'Not Started' // Default value
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(taskData);
        setTaskData({ task: '', priority: 'Low', status: 'Not Started' }); // Reset to default values
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-semibold my-4'>What's your plan for today?</h2>

            <input
                required
                type="text"
                name="task"
                placeholder='Add your task...'
                className='border-2 border-purple-500 rounded-md py-2 px-3 w-full focus:outline-purple-700'
                value={taskData.task}
                onChange={handleChange}
            />

            <div className='mt-5 w-[90%] mx-auto mb-2 flex justify-between'>
                <PrioritySelection onChange={handleChange} />
                <StatusSelection onChange={handleChange} />
            </div>

            <button type='submit' className='w-full bg-indigo-600 py-2 rounded-md text-white hover:bg-indigo-800 mt-5'>Add</button>
        </form>
    );
}

export default TaskForm;
