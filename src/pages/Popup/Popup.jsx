import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} z-50 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          ></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SuccessModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3
            className="text-lg leading-6 font-medium text-gray-900"
            id="modal-headline"
          >
            Information
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{props.message}</p>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SuccessModal;
