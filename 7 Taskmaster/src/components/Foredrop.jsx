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
        // Ensure priority and status are set from the taskData
        setTasks(prevTasks => [
            ...prevTasks, 
            { 
                task: taskData.task, 
                priority: taskData.priority || 'Low', // Default to 'Low' if no priority is selected
                status: taskData.status || 'Not Started' // Default to 'Not Started' if no status is selected
            }
        ]);
        closeModal();
    };

    // Function to toggle task status
    const toggleStatus = (index) => {
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            const currentStatus = newTasks[index].status;

            const newStatus = 
                currentStatus === 'Not Started' ? 'In Progress' :
                currentStatus === 'In Progress' ? 'Finished' :
                'Not Started'; 

            newTasks[index] = { ...newTasks[index], status: newStatus };
            return newTasks;
        });
    };

    // Function to toggle task priority
    const togglePriority = (index) => {
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            const currentPriority = newTasks[index].priority;

            const newPriority = 
                currentPriority === 'Low' ? 'Medium' :
                currentPriority === 'Medium' ? 'High' :
                'Low'; 

            newTasks[index] = { ...newTasks[index], priority: newPriority };
            return newTasks;
        });
    };

    return (
        <div className='h-[calc(100vh-5.05rem)] absolute w-[calc(100vw-16.66%)] right-0 z-[2] p-5 flex gap-7 flex-wrap'>
            <div onClick={openModal} className='cursor-pointer h-64 w-56 rounded-[10px] bg-purple-400'>
                <div className='flex justify-center items-center h-full'>
                    <i className="fa-solid fa-plus text-5xl bg-white rounded-full py-5 px-[23px] cursor-pointer"></i>
                </div>
            </div>

            {tasks.map((task, index) => {
                const bgColor = 
                    task.status === 'Not Started' ? 'bg-red-500' :
                    task.status === 'In Progress' ? 'bg-yellow-500' :
                    task.status === 'Finished' ? 'bg-emerald-500' :
                    'bg-purple-400'; 

                return (
                    <div 
                        key={index} 
                        className={`h-64 w-56 rounded-[10px] ${bgColor} px-3 pt-3 pb-1 transition-colors duration-700`} 
                    >
                        <div className='flex flex-col justify-between items-start h-full overflow-hidden'>
                            <div className='text-left h-[88%] overflow-hidden'>
                                <h3 className='font-bold'>{task.task}</h3>
                            </div>

                            <div className='flex justify-between w-full text-[12px] font-semibold'>
                                <p
                                    onClick={() => togglePriority(index)} 
                                    className='cursor-pointer hover:underline'
                                >
                                    Priority: {task.priority}
                                </p>
                                <p
                                    onClick={() => toggleStatus(index)} 
                                    className='cursor-pointer hover:underline'
                                >
                                    Status: {task.status}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {showModal && (
                <Modal onClose={closeModal}>
                    <TaskForm onSubmit={handleTaskSubmit} />
                </Modal>
            )}
        </div>
    );
}

export default Foredrop;
