import React from "react";

function InputContainer({ noteText, handleNoteChange, handleNoteSubmit }) {
    const handleSubmitForm = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault(); // Prevents adding a new line in the textarea
            handleNoteSubmit(e); // Call your submit function
        }
    };
    return ( <
        form className = "input-container-form"
        onSubmit = { handleNoteSubmit } >
        <
        div className = "input-container" >
        <
        textarea className = "input-note"
        onChange = { handleNoteChange }
        onKeyDown = { handleSubmitForm }
        value = { noteText }
        placeholder = "Enter your text here..........."
        rows = { 5 } >
        < /textarea> <
        button className = "enter-button" >
        <
        img src = "/assets/enter.svg"
        alt = "Enter" / >
        <
        /button> <
        /div> <
        /form>
    );
}


export default InputContainer;