import React from "react";
import GroupDetails from "./GroupDetails";
import NoGroupSelected from "./NoGroupSelected";
import useIsMobile from "../../hooks/use-is-mobile";

function RightSideNotesPage({
  selectedGroup,
  handleNoteChange,
  handleNoteSubmit,
  noteText,
  setSelectedGroup,
  setOpenedPage,
}) {
  const isMobile = useIsMobile();

  return (
    <div className={`right ${isMobile && "right-mobile"}`}>
      {selectedGroup ? (
        <GroupDetails
          selectedGroup={selectedGroup}
          handleNoteChange={handleNoteChange}
          handleNoteSubmit={handleNoteSubmit}
          noteText={noteText}
          setSelectedGroup={setSelectedGroup}
          setOpenedPage={setOpenedPage}
        />
      ) : (
        <NoGroupSelected />
      )}
    </div>
  );
}

export default RightSideNotesPage;
