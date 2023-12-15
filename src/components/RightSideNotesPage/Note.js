import React from "react";

function Note({ note }) {
    const getFormattedDate = (dateObj) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateObj).toLocaleDateString("en-US", options);
    };

    const getFormattedTime = (dateObj) => {
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        return new Date(dateObj).toLocaleTimeString("en-US", options);
    };

    return ( <
        div className = "note" >
        <
        div className = "note-time" >
        <
        div > { getFormattedTime(note.time) } < /div> <
        div > { getFormattedDate(note.time) } < /div> <
        /div> <
        div className = "note-text" > { note.text } < /div> <
        /div>
    );
}

export default Note;