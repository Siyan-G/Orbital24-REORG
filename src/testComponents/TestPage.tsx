// import React from "react";
// import AddEventTest from "./AddEventTest";
// import GetEventTest from "./GetEventTest";

// export default function TestPage() {
//   return (
//     <React.Fragment>
//       <AddEventTest />
//       <GetEventTest />
//     </React.Fragment>
//   );
// }

import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CustomizedCalendar from "../components/dashboard/comp/calendar/UserCalendar";
import "./TestPage.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function TestPage() {
  return (
    <div className="test-container" id="test-container">
      <ChakraProvider>
        <CustomizedCalendar />
      </ChakraProvider>
    </div>
  );
}

export default TestPage;
