import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    entries: [
      { text: "Rwanda is Great", isDone: false },
      { text: "Thousand hills ", isDone: false },
      { text: "The Kigali", isDone: false },
      { text: "What a codesssss", isDone: false },
      { text: "Rwanda is Great", isDone: false },
      { text: "Thousand hills ", isDone: false },
      { text: "The Kigali", isDone: false },
      { text: "What a codesssss", isDone: false }
    ],
    doneEntries: []
  },
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload]
        .isDone;
    }
  }
});

export const {
  addJournalEntry,
  removeEntry,
  toggleEntryDone
} = journalSlice.actions;

export default journalSlice.reducer;
