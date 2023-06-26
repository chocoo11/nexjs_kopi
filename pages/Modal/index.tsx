import React from 'react';

const Modal = ({ open, title, onClose, children }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-6 pt-6">
            <div className="flex justify-between text-xl leading-6 font-bold text-gray-900">
              <h3>{title}</h3>
              <button onClick={onClose}>x</button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;