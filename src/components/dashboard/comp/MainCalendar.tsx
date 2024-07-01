import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CustomizedCalendar from "./calendar/UserCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MainCalendar() {
  return (
    <div
      className="calendar-container"
      id="calendar-container"
      style={{ height: "98vh" }}
    >
      <ChakraProvider>
        <CustomizedCalendar />
      </ChakraProvider>
    </div>
  );
}

export default MainCalendar;
