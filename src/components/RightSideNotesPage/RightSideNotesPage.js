import React from "react";
import GroupDetails from "./GroupDetails";
import NoGroupSelected from "./NoGroupSelected";

function RightSideNotesPage({ selectedGroup, getFormattedDate, getFormattedTime }) {
  return (
    <div className="right">
      {selectedGroup ? (
        <GroupDetails selectedGroup={selectedGroup} getFormattedDate={getFormattedDate} getFormattedTime={getFormattedTime} />
      ) : (
        <NoGroupSelected />
      )}
    </div>
  );
}

export default RightSideNotesPage;
