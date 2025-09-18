/* eslint-disable */
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AppNavBar from "./AppNavBar/AppNavBar";
import data from "./Data/data";
import { useState } from "react";
import Home from "./Home/Home";
import ReportPage from "./Home/ReportPage";

function App() {
  const [room, setRoom] = useState(data);
  const [reports, setReports] = useState([]);

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home 
        room={room}
        reports={reports} 
        setReports={setReports} />} />
        <Route 
          path="/reports" 
          element={<ReportPage reports={reports} rooms={room} />} 
        />
      </Routes>
    </>
  );
}

export default App;
