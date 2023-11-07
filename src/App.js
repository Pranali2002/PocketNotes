import React, { useState } from "react";
import "./App.css";

function App() {
  const [noteText, setNoteText] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("#6691FF");
  const [isGroupDialogOpen, setGroupDialogOpen] = useState(false);

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleNoteSubmit = () => {
    if (noteText.trim() === "") return;

    const currentTime = new Date().toLocaleString();
    const newNote = { text: noteText, time: currentTime };

    const updatedNotes = selectedGroup
      ? groups.map((group) =>
          group === selectedGroup
            ? { ...group, notes: [...(group.notes || []), newNote] }
            : group
        )
      : groups;
    setGroups(updatedNotes);
    setNoteText("");

    // Save notes to local storage
    localStorage.setItem("groups", JSON.stringify(updatedNotes));
  };

  const handleCreateGroup = () => {
    setGroupDialogOpen(true);
  };

  const handleGroupCreate = () => {
    if (groupName.trim() === "") return;

    const newGroup = {
      name: groupName,
      color: groupColor,
      notes: []
    };

    setGroups([...groups, newGroup]);
    setGroupDialogOpen(false);

    // Save groups to local storage
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
  };

  const handleGroupColorChange = (color) => {
    setGroupColor(color);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="App">
      <div className="left">
        <div className="title">Pocket Notes</div>
        <button className="create-group-button" onClick={handleCreateGroup}>
          Create Notes Group
        </button>
        <div className="groups-list">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`group-item ${
                selectedGroup === group ? "selected" : ""
              }`}
              onClick={() => handleGroupSelect(group)}
            >
              <div
                className="group-icon"
                style={{ backgroundColor: group.color }}
              >
                {group.name.substring(0, 2)}
              </div>
              <div className="group-name">{group.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        {selectedGroup ? (
          <div className="group-details">
            <div className="group-info">
              <div
                className="group-icon"
                style={{ backgroundColor: selectedGroup.color }}
              >
                {selectedGroup.name.substring(0, 2)}
              </div>
              <div className="group-name">{selectedGroup.name}</div>
            </div>
            <div className="notes-container">
              {selectedGroup.notes &&
                selectedGroup.notes.map((note, index) => (
                  <div key={index} className="note">
                    <div className="note-text">{note.text}</div>
                    <div className="note-time">{note.time}</div>
                  </div>
                ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter text"
                value={noteText}
                onChange={handleNoteChange}
              />
              <button onClick={handleNoteSubmit}>Enter</button>
            </div>
          </div>
        ) : (
          <div className="no-group-selected">Select a group to view notes.</div>
        )}
      </div>
      {isGroupDialogOpen && (
        <div className="group-dialog">
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <div className="color-picker">
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
          <button className="create-button" onClick={handleGroupCreate}>
            Create
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
