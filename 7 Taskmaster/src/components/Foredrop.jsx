import React, { useState } from 'react';
import Modal from './todoComponents/Modal';
import TaskForm from './todoComponents/Task';
import ConfirmationModal from './todoComponents/Confirmation';

function Foredrop() {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const [taskToDeleteIndex, setTaskToDeleteIndex] = useState(null);

    function openModal() {
        setShowModal(true);
        setEditTaskIndex(null);
    }

    function closeModal() {
        setShowModal(false);
    }

    const handleTaskSubmit = (taskData) => {
        if (editTaskIndex !== null) {
            // Update the existing task
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                updatedTasks[editTaskIndex] = {
                    ...updatedTasks[editTaskIndex],
                    task: taskData.task,
                    priority: taskData.priority || 'Low',
                    status: taskData.status || 'Not Started'
                };
                return updatedTasks;
            });
        } else {
            // Add new task
            setTasks(prevTasks => [
                ...prevTasks,
                {
                    task: taskData.task,
                    priority: taskData.priority || 'Low',
                    status: taskData.status || 'Not Started'
                }
            ]);
        }
        closeModal();
    };

    const handleEdit = (index) => {
        setEditTaskIndex(index);
        setShowModal(true);
    };

    const handleDelete = (index) => {
        setTaskToDeleteIndex(index); // Set the task to be deleted
        setShowConfirmModal(true); // Show the confirmation modal
    };

    const confirmDelete = () => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== taskToDeleteIndex));
        setShowConfirmModal(false); // Close the confirmation modal
        setTaskToDeleteIndex(null); // Reset the task to be deleted
    };

    const closeConfirmModal = () => {
        setShowConfirmModal(false);
        setTaskToDeleteIndex(null); // Reset the task to be deleted
    };

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
        <div className='w-full h-[calc(100vh-5.05rem)] absolute right-0 z-[2] p-5 flex gap-7 flex-wrap'>
            <div onClick={openModal} className='max-sm:h-52 max-sm:w-[152px] max-md:h-56 max-md:w-52 cursor-pointer h-60 w-56 rounded-[10px] bg-purple-500 hover:scale-110 transition-all duration-300'>
                <div className='flex justify-center items-center h-full'>
                    <i className="max-sm:px-[17px] max-sm:text-3xl max-sm:py-3 fa-solid fa-plus text-5xl bg-white rounded-full py-5 px-[23px] cursor-pointer"></i>
                </div>
            </div>

            {tasks.map((task, index) => {
                const bgColor =
                    task.status === 'Not Started' ? 'bg-red-500' :
                    task.status === 'In Progress' ? 'bg-yellow-500' :
                    task.status === 'Finished' ? 'bg-emerald-500' :
                    'bg-purple-400';

                return (
                    <div key={index} className={`max-sm:h-52 max-sm:w-[152px] max-md:h-56 max-md:w-52 h-60 w-56 rounded-[10px] ${bgColor} px-3 pt-0 pb-1 transition-colors duration-700`}>
                        <div className='flex flex-col justify-between items-start h-full overflow-hidden'>
                            <div className='flex justify-between w-full text-[12px] mt-2'>
                                <button onClick={() => handleEdit(index)} className='text-blue-900 hover:underline'>
                                    <i className="fa-solid fa-pen-to-square text-xl"></i>
                                </button>
                                <button onClick={() => handleDelete(index)} className='text-red-500 hover:underline'>
                                    <i className="fa-solid fa-trash text-red-800 text-xl"></i>
                                </button>
                            </div>
                            <div className='text-left h-[70%] overflow-hidden'>
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
                    <TaskForm
                        onSubmit={handleTaskSubmit}
                        taskData={editTaskIndex !== null ? tasks[editTaskIndex] : null}
                    />
                </Modal>
            )}

            {showConfirmModal && (
                <ConfirmationModal 
                    onClose={closeConfirmModal} 
                    onConfirm={confirmDelete} 
                />
            )}
        </div>
    );
}

export default Foredrop;
