import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  };

  const course = [
    { Id: 1, Course: "React Basics ", Price: 999, enrolled: false },
    { Id: 2, Course: "Node.js Essentials", Price: 1199, enrolled: false },
    { Id: 3, Course: "UI/UX Design", Price: 799, enrolled: false },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "enroll":
        return state.map((c) =>
          c.Id === action.payload ? { ...c, enrolled: true } : c,
        );
    }
  }

  const [userData, setUserData] = useState(user);
  const [courses, dispatch] = useReducer(reducer, course);

  return (
    <>
      <Navbar courses={courses} userData={userData} />
      <Dashboard userData={userData} courses={{ courses, dispatch }} />
    </>
  );
}

export default App;
