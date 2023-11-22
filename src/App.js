import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Settings from './components/Settings/DateBirthday/Settings'
import Billings from "./components/Settings/Billings/Billings";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/qwerty" element={<Billings />} />

          {/* user login qilib kirgandan keyin PrivateRoute bilan profilini ulash kerak! */}
        </Routes>
    </div>
  );
}

export default App;
