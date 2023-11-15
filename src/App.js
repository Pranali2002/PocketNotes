import React, { useEffect, useState } from "react";
import LeftSidebar from "./components/LeftSideBar/LeftSideBar";
import RightSideNotesPage from "./components/RightSideNotesPage/RightSideNotesPage";
import Modal from "./components/Modal/Modal";
import GroupDialog from "./components/GroupDialog/GroupDialog";
import "./App.css";
import useIsMobile from "./hooks/use-is-mobile";

export const OPENED_PAGES = {
  HOME: "home",
  GROUP: "group",
};

function App() {
  const isMobile = useIsMobile();

  const [noteText, setNoteText] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [openedPage, setOpenedPage] = useState(OPENED_PAGES.HOME); // "home" || "group"

  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("#6691FF");
  const [isGroupDialogOpen, setGroupDialogOpen] = useState(false);

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

    const currentTime = new Date();
    const newNote = { text: noteText, time: currentTime };

    const updatedGroup = {
      ...selectedGroup,
      notes: [...(selectedGroup.notes || []), newNote],
    };
    const updatedGroups = selectedGroup
      ? groups.map((group) => (group === selectedGroup ? updatedGroup : group))
      : groups;

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

    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    setGroupName("");
  };

  const handleGroupColorChange = (color) => {
    setGroupColor(color);
  };

  const handleGroupSelect = (group) => {
    setOpenedPage(OPENED_PAGES.GROUP);
    setSelectedGroup(group);
  };

  if (isMobile) {
    return (
      <div className="App">
        {openedPage === OPENED_PAGES.HOME ? (
          <LeftSidebar
            groups={groups}
            selectedGroup={selectedGroup}
            handleCreateGroup={handleCreateGroup}
            handleGroupSelect={handleGroupSelect}
            setOpenedPage={setOpenedPage}
          />
        ) : (
          <RightSideNotesPage
            selectedGroup={selectedGroup}
            noteText={noteText}
            handleNoteChange={handleNoteChange}
            handleNoteSubmit={handleNoteSubmit}
            setSelectedGroup={setSelectedGroup}
            setOpenedPage={setOpenedPage}
          />
        )}
        <Modal
          handleClose={() => setGroupDialogOpen(false)}
          show={isGroupDialogOpen}
        >
          <GroupDialog
            isGroupDialogOpen={isGroupDialogOpen}
            handleGroupDialogClose={() => setGroupDialogOpen(false)}
            handleGroupCreate={handleGroupCreate}
            handleGroupNameChange={(e) => setGroupName(e.target.value)}
            handleGroupColorChange={handleGroupColorChange}
            groupName={groupName}
            groupColor={groupColor}
          />
        </Modal>
      </div>
    );
  }

  return (
    <div className="App">
      <LeftSidebar
        groups={groups}
        selectedGroup={selectedGroup}
        handleCreateGroup={handleCreateGroup}
        handleGroupSelect={handleGroupSelect}
      />
      <RightSideNotesPage
        selectedGroup={selectedGroup}
        noteText={noteText}
        handleNoteChange={handleNoteChange}
        handleNoteSubmit={handleNoteSubmit}
      />
      <Modal
        handleClose={() => setGroupDialogOpen(false)}
        show={isGroupDialogOpen}
      >
        <GroupDialog
          isGroupDialogOpen={isGroupDialogOpen}
          handleGroupDialogClose={() => setGroupDialogOpen(false)}
          handleGroupCreate={handleGroupCreate}
          handleGroupNameChange={(e) => setGroupName(e.target.value)}
          handleGroupColorChange={handleGroupColorChange}
          groupName={groupName}
          groupColor={groupColor}
        />
      </Modal>
    </div>
  );
}

export default App;
