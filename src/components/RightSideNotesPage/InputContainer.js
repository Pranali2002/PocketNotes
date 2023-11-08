import React from "react";

function InputContainer({ noteText, handleNoteChange, handleNoteSubmit}) {
  return (
    <form className="input-container">
      <input
        type="text"
        placeholder="Enter your text here.........."
        value={noteText}
        className="input-note"
        onChange={handleNoteChange}
      />
      <button
        className="enter-button"
        onClick={handleNoteSubmit}
      >
        <img src="/assets/enter.svg" alt="Enter" />
      </button>
    </form>
  );
}

export default InputContainer;
