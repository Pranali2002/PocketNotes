import React from "react";
import useIsMobile from "../../hooks/use-is-mobile";
import { OPENED_PAGES } from "../../App";

function GroupInfo({ selectedGroup, setSelectedGroup, setOpenedPage }) {
  const isMobile = useIsMobile();

  const handleGoBack = () => {
    setSelectedGroup(null);
    setOpenedPage(OPENED_PAGES.HOME);
  };

  return (
    <div className="group-info">
      {isMobile && (
        <button onClick={handleGoBack} className="go-back-btn">
          <img src="/assets/back-icon.svg" alt="back-icon" />
        </button>
      )}
      <div
        className="group-icon"
        style={{ backgroundColor: selectedGroup.color }}
      >
        <p>{selectedGroup.name.substring(0, 2)}</p>
      </div>
      <div className="group-name">{selectedGroup.name}</div>
    </div>
  );
}

export default GroupInfo;
