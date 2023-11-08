import React from "react";
import GroupInfo from "./GroupInfo";
import NotesContainer from "./NotesContainer";
import InputContainer from "./InputContainer";

function GroupDetails({ selectedGroup, getFormattedDate, getFormattedTime, handleNoteChange, handleNoteSubmit, noteText }) {
  return (
    <div className="group-details">
      <GroupInfo selectedGroup={selectedGroup} />
      <NotesContainer selectedGroup={selectedGroup} getFormattedDate={getFormattedDate} getFormattedTime={getFormattedTime} />
      <InputContainer
        handleNoteChange={handleNoteChange}
        handleNoteSubmit={handleNoteSubmit}
        noteText={noteText}
      />
    </div>
  );
}

export default GroupDetails;
