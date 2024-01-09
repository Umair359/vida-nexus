import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [modalClasses, setModalClasses] = useState(
    "fixed inset-0 overflow-y-auto"
  );

  if (!isOpen) {
    setModalClasses("hidden");
  }

  return (
    <div className={modalClasses}>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div className="bg-white p-8 w-1/2 rounded-md z-50">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
