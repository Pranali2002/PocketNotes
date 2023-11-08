import React from "react";

function CreateGroupButton({ handleCreateGroup }) {
  return (
    <button className="create-group-button" onClick={handleCreateGroup}>
      Create Notes Group
    </button>
  );
}

export default CreateGroupButton;
