import './App.css';
import LogInPage from "./components/LogInPage";
import ForgetPassword from './components/ForgetPassword';
import {Routes,Route} from 'react-router-dom' 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LogInPage />} />
      <Route path={"/forget"} element={<ForgetPassword />} />
    </Routes>
  );
};

export default App;