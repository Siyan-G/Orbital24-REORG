import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/pages/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import LogInPage from "./components/LogInPage";
import CoursePlanning from "./components/dashboard/pages/CoursePlanning";
import UserSettings from "./components/dashboard/pages/UserSetting";
import MainCalendar from "./components/dashboard/comp/MainCalendar";
import Calendar from "./components/dashboard/pages/Calendar";

// this is where we put all our routes. DO NOT SHOVE ALL INTO ONE FILE OOP!
// ================================
const Nav = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LogInPage />} />
      <Route path={"/forget"} element={<ForgetPassword />} />
      <Route path="/main" element={<Dashboard />} />
      <Route path="/main/calendar" element={<Calendar />} />
      <Route path="/main/courseplanning" element={<CoursePlanning />} />
      <Route path="/main/usersettings" element={<UserSettings />} />
    </Routes>
  );
};
// ===============================

export default Nav;
