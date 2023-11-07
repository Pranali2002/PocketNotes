import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [noteText, setNoteText] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("#6691FF");
  const [isGroupDialogOpen, setGroupDialogOpen] = useState(false);

  const modalRef = useRef();

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const loadLatestNotes = () => {
    const groupsList = localStorage.getItem("groups");
    if (groupsList) {
      setGroups(JSON.parse(groupsList));
    }
  };

  useEffect(() => {
    loadLatestNotes();
  }, []);

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === "") return;

    const currentTime = new Date().toLocaleString();
    const newNote = { text: noteText, time: currentTime };

    const updatedGroup = {
      ...selectedGroup,
      notes: [...(selectedGroup.notes || []), newNote],
    };
    const updatedGroups = selectedGroup
      ? groups.map((group) => (group === selectedGroup ? updatedGroup : group))
      : groups;

    // Save notes to local storage
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setSelectedGroup(updatedGroup);
    setGroups(updatedGroups);
    setNoteText("");
  };

  const handleCreateGroup = () => {
    setGroupDialogOpen(true);
    loadLatestNotes();
  };

  const handleGroupCreate = (e) => {
    e.preventDefault();
    if (groupName.trim() === "") return;

    const newGroup = {
      name: groupName,
      color: groupColor,
      notes: [],
    };

    setGroups([...groups, newGroup]);
    setGroupDialogOpen(false);

    // Save groups to local storage
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    setGroupName("");
  };

  const handleGroupColorChange = (color) => {
    setGroupColor(color);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const getFormattedDate = (dateObj) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateObj).toLocaleDateString("en-US", options);
  };

  const getFormattedTime = (dateObj) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(dateObj).toLocaleTimeString("en-US", options);
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
                    <div className="note-time">
                      <div>{getFormattedTime(note.time)}</div>
                      <div>{getFormattedDate(note.time)}</div>
                    </div>
                    <div className="note-text">{note.text}</div>
                  </div>
                ))}
            </div>
            <form
              name="new-note-form"
              id="new-note-form"
              className="input-container"
              onSubmit={handleNoteSubmit}
            >
              <input
                type="text"
                placeholder="Enter text"
                value={noteText}
                className="input-note"
                onChange={handleNoteChange}
              />
              <button type="submit">Enter</button>
            </form>
          </div>
        ) : (
          <div className="no-group-selected">Select a group to view notes.</div>
        )}
      </div>
      <Modal
        handleClose={() => setGroupDialogOpen(false)}
        show={isGroupDialogOpen}
      >
        <form
          name="new-group-form"
          onSubmit={handleGroupCreate}
          className="group-dialog"
          ref={modalRef}
        >
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
          <button className="create-button" type="submit">
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
