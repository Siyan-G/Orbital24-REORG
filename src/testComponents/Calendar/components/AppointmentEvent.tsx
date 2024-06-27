import { Box, Flex, Text } from "@chakra-ui/react";
import { AppointmentStatusCode, EVENT_STATUS_COLORS } from "../constants";
import { Appointment } from "../types";

export default function AppointmentEvent({
  appointment,
  isMonthView,
}: {
  appointment: Appointment;
  isMonthView?: boolean;
}) {
  const { location, title, description, resource,} = appointment;
  const handleEvent = () => {
    console.log("Event clicked");
  };

  return (
    <Box
      p={1}
      height="100%"
      color="black"
      {...(isMonthView ? { overflow: "hidden", h: 7 } : {})}
      onClick={handleEvent}
    >
      <Flex alignItems={"center"} justifyContent="space-between">
        <Flex>
          <Text fontSize="xs">{title}</Text>
        </Flex>
        <Flex>
          <Text fontSize="xs">{location}</Text>
        </Flex>
      </Flex>
      <Box mt={4}>
        {description}
      </Box>
    </Box>
  );
}
