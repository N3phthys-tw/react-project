import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ children, handleClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div onClick={handleClose}>
      <div className="background"></div>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
