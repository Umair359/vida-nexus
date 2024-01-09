import React from "react";
import "./StoreCreateModal.css";
import { Link } from "react-router-dom";
const StoreCreateModal = () => {
  const handleClose = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box store-created-popup">
        <h3>Your Store Has Been Created</h3>
        <button onClick={handleClose} className="btn-primary">
          DONE!
        </button>
        <p>FREE TRIAL PERIOD IS SET TO CONCLUDE IN 7 DAYS </p>
        <span>
          <p>UPDATE TO PREMIUM</p>
          <Link to={"/"}>Click Here</Link>
        </span>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default StoreCreateModal;
