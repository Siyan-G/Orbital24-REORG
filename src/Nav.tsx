import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/pages/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import LogInPage from "./components/LogInPage";
import Calendar from "./testComponents/Calendar/components/UserCalendar";
import CoursePlanning from "./components/dashboard/pages/CoursePlanning";
import Modules from "./components/dashboard/pages/Modules";
import UserSettings from "./components/dashboard/pages/UserSetting";

// this is where we put all our routes. DO NOT SHOVE ALL INTO ONE FILE OOP!
// ================================
const Nav = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LogInPage />} />
      <Route path={"/forget"} element={<ForgetPassword />} />
      <Route path="/main" element={<Dashboard />} />
      {/* <Route index element={<Calendar />} /> */}
      <Route path="/main/courseplanning" element={<CoursePlanning />} />
      <Route path="/main/modules" element={<Modules />} />
      <Route path="/main/usersettings" element={<UserSettings />} />
    </Routes>
  );
};
// ===============================

export default Nav;
