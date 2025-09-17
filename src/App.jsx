import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import data from "./Data/data";
import { useState } from "react";
import Home from "./Home";
import Report from "./Report";
import Detail from "./Detail";

function App() {
  const [room, setRoom] = useState(data);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home room={room}/>} />
        <Route path="/report" element={<Report />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
