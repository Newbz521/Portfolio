import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing.js";
import Projects from "./screens/Projects.js";
import About from "./screens/About.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
