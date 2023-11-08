import React from "react";
import GroupInfo from "./GroupInfo";
import NotesContainer from "./NotesContainer";
import InputContainer from "./InputContainer";

function GroupDetails({
  selectedGroup,
  handleNoteChange,
  handleNoteSubmit,
  noteText,
}) {
  return (
    <div className="group-details">
      <GroupInfo selectedGroup={selectedGroup} />
      <NotesContainer selectedGroup={selectedGroup} />
      <InputContainer
        handleNoteChange={handleNoteChange}
        handleNoteSubmit={handleNoteSubmit}
        noteText={noteText}
      />
    </div>
  );
}

export default GroupDetails;
