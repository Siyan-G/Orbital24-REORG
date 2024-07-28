import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Nav from "./Nav";
import theme from "./styles/MainTheme";
import { AuthProvider } from "./components/context/AuthContext";

const App: React.FC = () => {
  return (
    // Moved all Routes to a seperate file for ease of reading.
    //===============
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Nav />
      </AuthProvider>
    </ThemeProvider>
    //<UserCalendar />
    // <MainCalendar/>
    //==============
  );
};

export default App;
