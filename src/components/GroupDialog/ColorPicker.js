import React from "react";

function ColorPicker({ handleGroupColorChange }) {
  
  return (
    <div className="color-picker">
      <div className="choose-color-text">Choose Colour </div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#6691FF" }}
          onClick={() => handleGroupColorChange("#6691FF")}
        ></div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#0047FF" }}
          onClick={() => handleGroupColorChange("#0047FF")}
        ></div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#F19576" }}
          onClick={() => handleGroupColorChange("#F19576")}
        ></div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#43E6FC" }}
          onClick={() => handleGroupColorChange("#43E6FC")}
        ></div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#FF79F2" }}
          onClick={() => handleGroupColorChange("#FF79F2")}
        ></div>
        <div
          className="color-circle"
          style={{ backgroundColor: "#B38BFA" }}
          onClick={() => handleGroupColorChange("#B38BFA")}
        ></div>
    </div>
  );
}

export default ColorPicker;
