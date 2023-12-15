import React from "react";
import Note from "./Note";

function NotesContainer({ selectedGroup }) {
    return ( <
        div className = "notes-container" > {
            selectedGroup.notes &&
            selectedGroup.notes.map((note, index) => ( <
                Note key = { index }
                note = { note }
                />
            ))
        } <
        /div>
    );
}

export default NotesContainer;