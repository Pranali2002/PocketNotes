import React from "react";
import GroupItem from "./GroupItem";

function GroupsList({ groups, handleGroupSelect, selectedGroup }) {
    return ( <
        div className = "groups-list" > {
            groups.map((group, index) => ( <
                GroupItem key = { index }
                group = { group }
                handleGroupSelect = { handleGroupSelect }
                selected = { selectedGroup === group }
                />
            ))
        } <
        /div>
    );
}

export default GroupsList;