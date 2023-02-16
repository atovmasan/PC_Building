import React from "react";
import "./App.css";
import { Company } from "./Components/Company/Company";
import { Learning } from "./Components/Learning/Learning";
import { Navbar } from "./Components/Navbar/Navbar";
import { OurDoing } from "./Components/OurDoing/OurDoing";
import { Start } from "./Components/Start/Start";
import { Teachers } from "./Components/Teachers/Teachers";
import { Work } from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <OurDoing />
      <Start />
      <Work />
      <Company />
      <Teachers />
    </div>
  );
}

export default App;
