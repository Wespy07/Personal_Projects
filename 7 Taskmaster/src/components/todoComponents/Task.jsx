import React, { useState, useEffect } from 'react';
import PrioritySelection from './Priority';
import StatusSelection from './Status';

function TaskForm({ onSubmit, taskData: initialData }) {
    const [taskData, setTaskData] = useState({
        task: '',
        priority: 'Low', // Default value
        status: 'Not Started' // Default value
    });

    useEffect(() => {
        if (initialData) {
            setTaskData(initialData); // Populate the form with task data if editing
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(taskData);
        setTaskData({ task: '', priority: 'Low', status: 'Not Started' }); // Reset to default values after submission
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

            <div className='max-sm:flex-nowrap max-x-md:flex-wrap max-x-md:gap-3 mt-5 w-full mx-auto mb-2 flex justify-between'>
                <PrioritySelection onChange={handleChange} selectedPriority={taskData.priority} />
                <StatusSelection onChange={handleChange} selectedStatus={taskData.status} />
            </div>

            <button type='submit' className='w-full bg-indigo-600 py-2 rounded-md text-white hover:bg-indigo-800 mt-5'>
                {initialData ? 'Update' : 'Add'} Task
            </button>
        </form>
    );
}

export default TaskForm;
