import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Projects from "./screens/Projects.js";
import About from "./screens/About.js";
import Nav from "./components/navbar/nav";
import { useState } from "react";

function App() {
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");
  return (
    <>
      <Nav color={color} bg={bg} />
      <Routes>
        <Route
          path="/"
          element={<Landing bg={setBg} color={setColor}></Landing>}
        ></Route>
        <Route
          path="/Projects"
          element={<Projects bg={setBg} color={setColor}></Projects>}
        ></Route>
        <Route
          path="/About"
          element={<About bg={setBg} color={setColor}></About>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
