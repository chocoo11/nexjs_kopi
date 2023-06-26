import React from 'react';

const PopUpHapus = ({ handleDelete, onClose }) => {
  return (
    <div className="flex flex-col px-6">
      <div className="py-4">
        Are you sure you want to delete this? All of your data will be
        permanently removed. This action cannot be undone.
      </div>
      <div className="flex items-center justify-between mb-6 border-solid border-slate-200 rounded-b">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Tidak
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md bg-cyan px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 sm:ml-3 sm:w-auto"
          onClick={() => handleDelete(true)}
        >
          Setuju
        </button>
      </div>
    </div>
  );
};

export default PopUpHapus;
