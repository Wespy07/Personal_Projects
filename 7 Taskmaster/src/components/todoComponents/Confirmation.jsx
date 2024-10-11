import React from 'react';

function ConfirmationModal({ onClose, onConfirm }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete this task?</p>
                <div className="mt-4 flex justify-between">
                    <button onClick={onClose} className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400">Cancel</button>
                    <button onClick={onConfirm} className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
