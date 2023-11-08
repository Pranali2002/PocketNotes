import React from "react";

function InputContainer({ noteText, handleNoteChange, handleNoteSubmit }) {
  return (
    <form className="input-container" onSubmit={handleNoteSubmit}>
      {/* <input
        type="text"
        placeholder="Enter your text here.........."
        value={noteText}
        className="input-note"
        onChange={handleNoteChange}
      /> */}
      <textarea
        className="input-note"
        onChange={handleNoteChange}
        value={noteText}
        placeholder="Enter your text here..........."
        rows={5}
      ></textarea>
      <button className="enter-button">
        <img src="/assets/enter.svg" alt="Enter" />
      </button>
    </form>
  );
}

export default InputContainer;
