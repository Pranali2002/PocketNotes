import React from "react";
import Title from "./Title";
import CreateGroupButton from "./CreateGroupButton";
import GroupsList from "./GroupsList";
import useIsMobile from "../../hooks/use-is-mobile";

function LeftSidebar({
    handleCreateGroup,
    groups,
    handleGroupSelect,
    selectedGroup,
}) {
    const isMobile = useIsMobile();

    return ( <
        div className = { isMobile ? "left-mobile" : "left" } >
        <
        Title / >
        <
        CreateGroupButton handleCreateGroup = { handleCreateGroup }
        /> <
        GroupsList groups = { groups }
        handleGroupSelect = { handleGroupSelect }
        selectedGroup = { selectedGroup }
        /> < /
        div >
    );
}

export default LeftSidebar;