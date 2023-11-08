import React from "react";

function CreateGroupButton({ handleCreateGroup }) {
  return (
    <button className="create-group-button" onClick={handleCreateGroup}>
      <img src="/assets/+.svg" alt="Create Group" />
      Create Notes Group
    </button>
  );
}

export default CreateGroupButton;
