import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

function DetalleArchivo({ file }) {
  const [lines, setLines] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/files/data?fileName=${file}`)
      .then((response) => setLines(response.data[0].lines))
      .catch((error) => console.error(error));
  }, [file]);

  const handleBackClick = () => {
    dispatch({ type: "SET_SELECTED_FILE", payload: null });
  };

  return (
    <div>
      <h2>{file}</h2>
      <Table striped bordered hover className="table-striped">
        <thead>
          <tr>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => (
            <tr key={index}>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleBackClick}>Back to list</Button>
    </div>
  );
}

export default DetalleArchivo;
