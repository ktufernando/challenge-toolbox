import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../files/filesStore";
import FilesDataList from "./FilesDataList";

const initialState = {
  files: [
    { file: "file1", lines: [1, 2, 3] },
    { file: "file2", lines: [4, 5, 6] },
    { file: "file3", lines: [7, 8, 9] },
  ],
  filter: "",
  sortOrder: "asc",
};

beforeEach(() => {
  store.dispatch({ type: "SET_FILES", payload: initialState.files });
  store.dispatch({ type: "SET_FILTER", payload: initialState.filter });
  store.dispatch({ type: "SET_SORT_ORDER", payload: initialState.sortOrder });
});

test("renders the component without crashing", () => {
  render(
    <Provider store={store}>
      <FilesDataList />
    </Provider>
  );
});

test("filters files correctly based on input value", () => {
  const filter = "file2";
  store.dispatch({ type: "SET_FILTER", payload: filter });
  render(
    <Provider store={store}>
      <FilesDataList />
    </Provider>
  );
  expect(screen.getByText("file2")).toBeInTheDocument();
  expect(screen.queryByText("file1")).toBeNull();
  expect(screen.queryByText("file3")).toBeNull();
});

test("sorts files in ascending order based on file name", () => {
  store.dispatch({ type: "SET_SORT_ORDER", payload: "asc" });
  render(
    <Provider store={store}>
      <FilesDataList />
    </Provider>
  );
  expect(screen.getAllByRole("row")[1]).toHaveTextContent("file1");
  expect(screen.getAllByRole("row")[2]).toHaveTextContent("file2");
  expect(screen.getAllByRole("row")[3]).toHaveTextContent("file3");
});

test("sorts files in descending order based on file name", () => {
  store.dispatch({ type: "SET_SORT_ORDER", payload: "desc" });
  render(
    <Provider store={store}>
      <FilesDataList />
    </Provider>
  );
  expect(screen.getAllByRole("row")[1]).toHaveTextContent("file3");
  expect(screen.getAllByRole("row")[2]).toHaveTextContent("file2");
  expect(screen.getAllByRole("row")[3]).toHaveTextContent("file1");
});
