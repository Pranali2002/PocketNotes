import React from "react";
import Note from "./Note";

function NotesContainer({ selectedGroup, getFormattedDate, getFormattedTime }) {
  return (
    <div className="notes-container">
      {selectedGroup.notes &&
        selectedGroup.notes.map((note, index) => (
          <Note key={index} note={note} getFormattedDate={getFormattedDate} getFormattedTime={getFormattedTime} />
        ))}
    </div>
  );
}

export default NotesContainer;
