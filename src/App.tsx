import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Nav from "./Nav";
import theme from "./styles/MainTheme";

const App: React.FC = () => {
  return (
    // Moved all Routes to a seperate file for ease of reading.
    //===============
    <ThemeProvider theme={theme}>
    <Nav />
    </ThemeProvider>
    //<UserCalendar />
    // <MainCalendar/>
    //==============
  );
};

export default App;
