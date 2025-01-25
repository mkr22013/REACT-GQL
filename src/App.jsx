import { useState } from "react";
import CharactersList from "./pages/Characters/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character/Character";
import "./App.css";
import Search from "./pages/Search/Search";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/search" Component={Search} />
        <Route strict exact path="/:id" Component={Character} />
        <Route strict exact path="/contactus" Component={ContactUs} />
      </Routes>
    </div>
  );
}

export default App;
