import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  filter: "",
  sortOrder: "asc",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILES":
      return { ...state, files: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };
    case "SET_SELECTED_FILE":
      return { ...state, selectedFile: action.payload };
    default:
      return state;
  }
}

const store = configureStore({ reducer: rootReducer });

export default store;
