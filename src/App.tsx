import './App.css';
import LogInPage from "./components/LogInPage";
import ForgetPassword from './components/ForgetPassword';
import {Routes,Route} from 'react-router-dom' 
import Layout from './components/dashboard/pages/Dashboard';
import Calendar from './components/dashboard/pages/Calendar';
import CoursePlanning from './components/dashboard/pages/CoursePlanning';
import UserSettings from './components/dashboard/pages/UserSetting';
import Modules from './components/dashboard/pages/Modules';
import Nav from './Nav';
import TestPage from './testComponents/TestPage';

const App: React.FC = () => {
  return (
    // Moved all Routes to a seperate file for ease of reading.
    //===============
    <Nav/>
    // <TestPage/ >
    //==============
  );
};

export default App;