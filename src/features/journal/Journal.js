import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JournalEntries from "./components/JournalEntries";
import { addJournalEntry } from "./journalSlice";

const Journal = () => {
  const [newJournalEntry, setNewJournalEntry] = useState("");
  const { entries } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (newJournalEntry === "") {
      return;
    }
    dispatch(addJournalEntry(newJournalEntry));
    setNewJournalEntry("");
  };
  return (
    <> 
      <div id="journal" className="surface">
        <h2>SAY SOMETHING!</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="journal-input" placeholder="Type here.........."
            value={newJournalEntry}
            onChange={(e) => {
              setNewJournalEntry(e.target.value);
            }}
            aria-label="New journal entry"
          />
        </form>
      </div>
      <JournalEntries entries={entries} />
    </>
  );
};

export default Journal;
