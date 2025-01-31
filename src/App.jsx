// import { useState } from "react";
import CharactersList from "./pages/Characters/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character/Character";
import "./App.css";
import Search from "./pages/Search/Search";
import ContactUs from "./pages/ContactUs/ContactUs";

import GetAllCourses from "./pages/Queries/CoursesQuery";
import Courses from "./pages/Mutations/Courses";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/search" Component={Search} />
        <Route strict exact path="/:id" Component={Character} />
        <Route strict exact path="/course" Component={Courses} />
        <Route strict exact path="/contactus" Component={ContactUs} />
        <Route strict exact path="/courses" Component={GetAllCourses} />
        <Route strict exact path="*" Component={CharactersList} />
      </Routes>
    </div>
  );
}

export default App;
