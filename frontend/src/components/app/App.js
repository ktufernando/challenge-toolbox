import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "../files/filesStore";
import Files from "../files/Files";
import "./App.css";

function App() {
  return (
    <Container>
      <h1>Data files</h1>
      <Provider store={store}>
        <Files></Files>
      </Provider>
    </Container>
  );
}

export default App;
