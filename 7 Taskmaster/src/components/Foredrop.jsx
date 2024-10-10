import React, { useState } from 'react';
import Modal from './todoComponents/Modal';
import TaskForm from './todoComponents/Task';

function Foredrop() {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }

    const handleTaskSubmit = (taskData) => {
        setTasks(prevTasks => [...prevTasks, taskData]);
        closeModal(); 
    };

    return (
        <div className='h-[calc(100vh-5.05rem)] absolute w-[calc(100vw-16.66%)] right-0 z-[2] p-5 flex gap-7 flex-wrap'>
            <div className='h-64 w-56 rounded-[10px] bg-purple-400'>
                <div className='flex justify-center items-center h-full'>
                    <button onClick={openModal}>
                        <i className="fa-solid fa-plus text-5xl bg-white rounded-full py-5 px-[23px] cursor-pointer"></i>
                    </button>
                </div>
            </div>

            {/* Render task cards */}
            <div className='flex flex-col gap-5'>
                {tasks.map((task, index) => (
                    <div key={index} className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='font-bold'>{task.task}</h3>
                        <p>Priority: {task.priority}</p>
                        <p>Status: {task.status}</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <Modal onClose={closeModal}>
                    <TaskForm onSubmit={handleTaskSubmit} />
                </Modal>
            )}
        </div>
    );
}

export default Foredrop;
