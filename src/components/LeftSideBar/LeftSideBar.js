import React from "react";
import Title from "./Title";
import CreateGroupButton from "./CreateGroupButton";
import GroupsList from "./GroupsList";

function LeftSidebar({ handleCreateGroup, groups, handleGroupSelect, selectedGroup }) {
  return (
    <div className="left">
      <Title />
      <CreateGroupButton handleCreateGroup={handleCreateGroup} />
      <GroupsList
        groups={groups}
        handleGroupSelect={handleGroupSelect}
        selectedGroup={selectedGroup}
      />
    </div>
  );
}

export default LeftSidebar;
