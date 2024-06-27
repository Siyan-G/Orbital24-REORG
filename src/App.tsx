import "./App.css";
import LogInPage from "./components/LogInPage";
import ForgetPassword from "./components/ForgetPassword";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/dashboard/pages/Dashboard";
import Calendar from "./testComponents/Calendar/components/UserCalendar";
import CoursePlanning from "./components/dashboard/pages/CoursePlanning";
import UserSettings from "./components/dashboard/pages/UserSetting";
import Modules from "./components/dashboard/pages/Modules";
import Nav from "./Nav";
import TestPage from "./testComponents/TestPage";
import UserCalendar from "./testComponents/Calendar/components/UserCalendar";

const App: React.FC = () => {
  return (
    // Moved all Routes to a seperate file for ease of reading.
    //===============
    <Nav />
    //<UserCalendar />
    // <TestPage/ >
    //==============
  );
};

export default App;
