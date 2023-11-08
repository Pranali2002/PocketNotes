import React from "react";
import GroupDetails from "./GroupDetails";
import NoGroupSelected from "./NoGroupSelected";

function RightSideNotesPage({
  selectedGroup,
  handleNoteChange,
  handleNoteSubmit,
  noteText,
}) {
  return (
    <div className="right">
      {selectedGroup ? (
        <GroupDetails
          selectedGroup={selectedGroup}
          handleNoteChange={handleNoteChange}
          handleNoteSubmit={handleNoteSubmit}
          noteText={noteText}
        />
      ) : (
        <NoGroupSelected />
      )}
    </div>
  );
}

export default RightSideNotesPage;
