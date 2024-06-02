import './App.css';
import LogInPage from "./components/LogInPage";
import ForgetPassword from './components/ForgetPassword';
import {Routes,Route} from 'react-router-dom' 
import Layout from './components/dashboard/Dashboard';
import Calendar from './components/dashboard/pages/Calendar';
import CoursePlanning from './components/dashboard/pages/CoursePlanning';
import UserSettings from './components/dashboard/pages/UserSetting';
import Modules from './components/dashboard/pages/Modules';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<LogInPage />} />
      <Route path={"/forget"} element={<ForgetPassword />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Calendar />} />
        <Route path="/courseplanning" element={<CoursePlanning />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/usersettings" element={<UserSettings />} />
      </Route>
    </Routes>
  );
};

export default App;