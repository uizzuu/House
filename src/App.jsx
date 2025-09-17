import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import data from "./Data/data";
import { useState } from "react";
import Home from "./Home/Home";

function App() {
  const [room, setRoom] = useState(data);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home room={room}/>} />
      </Routes>
    </>
  );
}

export default App;
