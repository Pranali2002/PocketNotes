import React from "react";

function GroupItem({ group, handleGroupSelect, selected }) {
    return ( <
        div className = { `group-item ${selected ? "selected" : ""}` }
        onClick = {
            () => handleGroupSelect(group) } >
        <
        div className = "group-icon"
        style = {
            { backgroundColor: group.color } } >
        <
        p > { group.name.substring(0, 2) } < /p> <
        /div> <
        div className = "group-name" > { group.name } < /div> <
        /div>
    );
}

export default GroupItem;