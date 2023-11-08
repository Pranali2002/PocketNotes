import React from "react";

function Note({ note, getFormattedDate, getFormattedTime }) {
  return (
    <div className="note">
      <div className="note-time">
        <div>{getFormattedTime(note.time)}</div>
        <div>{getFormattedDate(note.time)}</div>
      </div>
      <div className="note-text">{note.text}</div>
    </div>
  );
}

export default Note;
