// Popup.js
import React from 'react';

const Popup = ({ jobDescription, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg">
        <div className="text-black">{jobDescription}</div>
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}

export default Popup;
