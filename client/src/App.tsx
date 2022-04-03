import React from "react";
import "./App.css";
import Missions from "./components/Missions";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1 className="App">SpaceX Missions</h1>
        <Missions />
      </Container>
    </div>
  );
}

export default App;
