import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CustomizedCalendar from "../../../testComponents/Calendar/components/UserCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MainCalendar() {
  return (
    <div className="test-container" id="test-container">
      <ChakraProvider>
        <CustomizedCalendar />
      </ChakraProvider>
    </div>
  );
}

export default MainCalendar;
