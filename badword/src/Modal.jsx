import "./App.css";

function Modal({ children, onClose, isBadWord }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="">
          {children}
          <button onClick={onClose} className="modal-close-btn">
            Close
          </button>
        </div>
        <div className="modal-img">
          {isBadWord ? (
            <img src="../src/assets/tải xuống.jfif" alt="" />
          ) : (
            <img src="../src/assets/tải xuống (1).jfif" alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
