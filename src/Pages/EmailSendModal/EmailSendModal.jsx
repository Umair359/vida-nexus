import React from "react";
import "./EmailSendModal.css";
import { useNavigate } from "react-router-dom";
const EmailSendModal = () => {
  const navigate = useNavigate();
  const handleClose = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_3").close();
    navigate("/");
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box register-created-popup">
        <h3>Check your Email</h3>
        <p>
          A link has been sent to your provided email address. Click on the link
          to continue with the reset password.
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

export default EmailSendModal;
