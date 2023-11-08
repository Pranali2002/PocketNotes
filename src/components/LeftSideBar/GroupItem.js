import React from "react";

function GroupItem({ group, handleGroupSelect, selected }) {
  return (
    <div
      className={`group-item ${selected ? "selected" : ""}`}
      onClick={() => handleGroupSelect(group)}
    >
      <div className="group-icon" style={{ backgroundColor: group.color }}>
        {group.name.substring(0, 2)}
      </div>
      <div className="group-name">{group.name}</div>
    </div>
  );
}

export default GroupItem;
