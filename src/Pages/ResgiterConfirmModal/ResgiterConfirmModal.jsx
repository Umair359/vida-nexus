import React from "react";
import "./ResgiterConfirmModal.css";
import { useNavigate } from "react-router-dom";
const ResgiterConfirmModal = () => {
  const navigate = useNavigate();
  const handleClose = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_2").close();
    navigate("/");
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box register-created-popup">
        <h3>Verify your Email</h3>
        <p>
          A verification link has been sent to your provided email address.
          Click on the link to continue with the Registration.
        </p>
        <button onClick={handleClose} className="btn-primary">
          OK
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ResgiterConfirmModal;
