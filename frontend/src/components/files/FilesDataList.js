import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function FilesDataList() {
  const { files, filter, sortOrder } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/files/data`)
      .then((response) =>
        dispatch({ type: "SET_FILES", payload: response.data })
      )
      .catch((error) => console.error(error));
  }, [filter, dispatch]);

  const filteredFiles = files.filter(({ file }) => {
    return file.toLowerCase().includes(filter.toLowerCase());
  });

  const sortedFiles = filteredFiles.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.file.localeCompare(b.file);
    } else {
      return b.file.localeCompare(a.file);
    }
  });

  const handleRowClick = (file) => {
    dispatch({ type: "SET_SELECTED_FILE", payload: file });
  };

  return (
    <div>
      <Form.Group className="filter-form">
        <Form.Label>Filter files by name:</Form.Label>
        <Form.Control
          type="text"
          value={filter}
          onChange={(event) =>
            dispatch({ type: "SET_FILTER", payload: event.target.value })
          }
        />
      </Form.Group>
      <Table striped bordered hover className="table-striped">
        <thead>
          <tr>
            <th
              onClick={() =>
                dispatch({
                  type: "SET_SORT_ORDER",
                  payload: sortOrder === "asc" ? "desc" : "asc",
                })
              }
            >
              File Name
              {sortOrder === "asc" ? " ▲" : " ▼"}
            </th>
            <th>Lines</th>
          </tr>
        </thead>
        <tbody>
          {sortedFiles.map(({ file, lines }) => (
            <tr key={file} onClick={() => handleRowClick(file)}>
              <td>{file}</td>
              <td>{lines.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FilesDataList;
