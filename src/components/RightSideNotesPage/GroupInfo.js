import React from "react";

function GroupInfo({ selectedGroup }) {
  return (
    <div className="group-info">
      <div className="group-icon" style={{ backgroundColor: selectedGroup.color }}>
        {selectedGroup.name.substring(0, 2)}
      </div>
      <div className="group-name">{selectedGroup.name}</div>
    </div>
  );
}

export default GroupInfo;
