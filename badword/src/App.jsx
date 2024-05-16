import { useState } from "react";
import "./App.css";
import data from "./data";
import Modal from "./Modal";

function App() {
  const [badWord, setBadWord] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newWord, setNewWord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isBadWord, setIsBadWord] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = () => {
    if (selectedItem) {
      setBadWord(badWord.filter((word) => word !== selectedItem));
      setSelectedItem(null);
    }
  };

  const handleAdd = () => {
    if (newWord.trim()) {
      setBadWord([...badWord, newWord]);
      setNewWord("");
    }
  };

  const handleUpdate = () => {
    const updater = badWord.filter((word) => word !== selectedItem);
    setBadWord([...updater, newWord]);
  };

  const handleSearch = () => {
    if (newWord === null) {
      setIsBadWord("chưa nhập bad word ấn chi má ?");
      setShowModal(true);
    } else {
      const result = badWord.filter(
        (word) => word.toLowerCase() === newWord.toLowerCase()
      );
      setIsBadWord(result.length > 0);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="text">Danh sách Bad Word:</h2>

      <div>
        <div className="card">
          <div className="card-list">
            {badWord.length > 0 ? (
              badWord.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  style={{
                    backgroundColor:
                      item === selectedItem ? "lightgray" : "#191c29",
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <Modal onClose={closeModal} isBadWord={isBadWord}>
          <p>
            {newWord !== ""
              ? `${newWord} ${
                  isBadWord ? "là Bad Word!" : "không phải là Bad Word!"
                }`
              : "Chưa nhập Bad Word ấn chi má ?"}
          </p>
        </Modal>
      )}

      <div className="bottom">
        <div>
          <div className="input-container">
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              className="animated-input"
              placeholder="Nhập BadWord..."
            />
          </div>
          <button className="custom-btn btn-8" onClick={handleAdd}>
            Thêm BadWord
          </button>
          <button className="custom-btn btn-14" onClick={handleUpdate}>
            Sửa BadWord
          </button>
          <button className="custom-btn btn-11" onClick={handleDelete}>
            Xóa BadWord
          </button>
          <button className="custom-btn btn-16" onClick={handleSearch}>
            Ckeck BadWord
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
