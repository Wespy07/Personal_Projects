import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='max-x-sm:mt-14 max-x-sm:left-10 max-xl:w-[75%] max-xl:absolute max-xl:right-[5rem] bg-white p-5 rounded-md relative w-1/2'>
                {children}
                <button onClick={onClose} className='absolute right-0 top-0'>
                    <i className="fa-regular fa-circle-xmark p-2 text-red-500 font-bold text-xl"></i>
                </button>
            </div>
        </div>
    );
}

export default Modal;
