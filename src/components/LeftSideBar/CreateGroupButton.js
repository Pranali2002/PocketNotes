import React from "react";

function CreateGroupButton({ handleCreateGroup }) {
    return ( <
        button className = "create-group-button"
        onClick = { handleCreateGroup } >
        <
        img src = "/assets/+.svg"
        alt = "Create Group" / >
        <
        /button>

    );
}

export default CreateGroupButton;