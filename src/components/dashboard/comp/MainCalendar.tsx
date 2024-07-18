import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CustomizedCalendar from "./calendar/UserCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from "@mui/material";

function MainCalendar() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth:'70%'}}>
    <div
      className="calendar-container"
      id="calendar-container"
      style={{ height: "98vh" }}
    >
      <ChakraProvider>
        <CustomizedCalendar />
      </ChakraProvider>
    </div>
    </Box>
  );
}

export default MainCalendar;
