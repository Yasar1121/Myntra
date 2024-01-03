import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetch: false, // Fix typo in property name
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchStart: (state) => {
      state.currentlyFetch = true;
    },
    markFetchFinish: (state) => {
      state.currentlyFetch = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice; // Use .reducer instead of .actions
