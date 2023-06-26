import React from 'react';

const EditPopUp = ({ editData,handleSubmitEdit, onClose }) => {
  return (
    <form onSubmit={handleSubmitEdit}>
      <div className="flex flex-wrap justify-between p-4">
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="code"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Code :
          </label>
          <input
            type="text"
            id="nim"
            name="nim"
            defaultValue={editData.nim}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Insert Code Of Recipe"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="date"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Date :
          </label>
          <input
            type="date"
            name="tanggal_lahir"
            defaultValue={editData.tanggal_lahir}
            min="1970-01-01"
            max="2025-12-31"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Insert Name Recipe"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Name :
          </label>
          <input
            type="text"
            id="Nama"
            name="Nama"
            defaultValue={editData.Nama}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Placeholder Text"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="image"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Image :
          </label>
          <input
            type="file"
            name="image"
            disabled
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full flex flex-col mb-2 px-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Description :
          </label>
          <textarea
            id="address"
            name="alamat"
            defaultValue={editData.alamat}
            className="border border-gray-300 rounded-md py-2 px-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Insert Description"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 mb-6 border-solid border-slate-200 rounded-b">
        <button
          type="button"
          className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-brown px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 sm:ml-3 sm:w-auto"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditPopUp;
