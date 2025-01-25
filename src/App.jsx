import { useState } from "react";
import CharactersList from "./pages/characters/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/character/Character";
import "./App.css";
import Search from "./pages/search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/search" Component={Search} />
        <Route strict exact path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
