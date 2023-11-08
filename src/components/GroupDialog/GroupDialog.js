import React from "react";
import ColorPicker from "./ColorPicker";
import useIsMobile from "../../hooks/use-is-mobile";

function GroupDialog({
  handleGroupCreate,
  groupName,
  handleGroupNameChange,
  groupColor,
  handleGroupColorChange,
  handleClose,
}) {
  const isMobile = useIsMobile();

  return (
    <div
      className={isMobile ? "group-dialog-mobile" : "group-dialog"}
      onClick={(e) => e.stopPropagation()}
    >
      <form
        name="new-group-form"
        id="new-group-form"
        onSubmit={handleGroupCreate}
      >
        <div className="dialog-instructions">Create New Notes Group</div>
        <div className="group-name-div">
          <label htmlFor="enter-group-name" className="group-name-label">
            Group Name
          </label>
          <input
            type="text"
            name="group-name"
            id="enter-group-name"
            placeholder="Enter your group name....."
            value={groupName}
            onChange={handleGroupNameChange}
          />
        </div>
        <ColorPicker handleGroupColorChange={handleGroupColorChange} />
        <button
          className="create-button"
          type="submit"
          style={!isMobile ? { marginRight: 0 } : {}}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default GroupDialog;
