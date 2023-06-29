import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Help from "./Components/Help";
import Game from "./Components/Game";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
