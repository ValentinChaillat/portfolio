import React from "react";
import Navbar from "./components/navbar";
import "./styles/index.scss";

function App() {
  return (
    <div className="app col-12 row p-0 m-0">
      <div className="bordure col-1 p-0 m-0"></div>
      <div className="middle col-10 p-0 m-0">
        <h1>Titre</h1>
        <div className="navigation">
          <Navbar />
        </div>
      </div>

      <div className="bordure col-1 p-0 m-0"></div>
    </div>
  );
}

export default App;
