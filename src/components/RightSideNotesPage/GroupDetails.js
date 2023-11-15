import React from "react";
import GroupInfo from "./GroupInfo";
import NotesContainer from "./NotesContainer";
import InputContainer from "./InputContainer";

function GroupDetails({
  selectedGroup,
  handleNoteChange,
  handleNoteSubmit,
  noteText,
  setSelectedGroup,
  setOpenedPage,
}) {
  return (
    <div className="group-details">
      <GroupInfo
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setOpenedPage={setOpenedPage}
      />
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
