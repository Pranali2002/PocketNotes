import React from "react";
import ColorPicker from "./ColorPicker";

function GroupDialog({ handleGroupCreate, groupName, handleGroupNameChange, groupColor, handleGroupColorChange, handleClose }) {
  return (
    <div className="group-dialog" onClick={(e) => e.stopPropagation()}>
      <form name="new-group-form" onSubmit={handleGroupCreate}>
        <div className="dialog-instructions">Create New Notes Group</div>
        <label htmlFor="enter-group-name" className="group-name-label">Group Name </label>
        <input
          type="text"
          name="group-name"
          id="enter-group-name"
          placeholder="Enter your group name....."
          value={groupName}
          onChange={handleGroupNameChange}
        />
        <ColorPicker handleGroupColorChange={handleGroupColorChange} />
          <button className="create-button" type="submit">
            Create
          </button>
      </form>
    </div>
  );
}

export default GroupDialog;
