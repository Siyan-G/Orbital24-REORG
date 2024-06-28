import moment from "moment";
import { Views } from "react-big-calendar";
import { EventItem } from "../types";

export const VIEW_OPTIONS = [
  { id: Views.DAY, label: "Day" },
  { id: Views.WEEK, label: "Week" },
  { id: Views.MONTH, label: "Month" },
];

export const RESOURCES = [
  { id: 1, title: "Lecture" },
  { id: 2, title: "Dr John" },
];

export enum AppointmentStatusCode {
  Pending = "P",
  CheckedIn = "CI",
}

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};

export const EVENTS: EventItem[] = [
  {
    start: moment("2024-06-12T10:00:00").toDate(),
    end: moment("2024-06-12T11:00:00").toDate(),
    data: {
      appointment: {
        id: 1,
        title: "CS1101S",
        description: "Programming Methodology",
        resource: "Lecture",
        location: "Online",
      },
    },
    resourceId: 1,
  },
  {
    start: moment("2024-06-12T12:00:00").toDate(),
    end: moment("2024-06-12T13:00:00").toDate(),
    data: {
      appointment: {
        id: 1,
        title: "IS2238",
        description: "Economics for AI",
        resource: "Lecture",
        location: "LT15",
      },
    },
    resourceId: 1,
  },
  {
    start: moment("2024-06-12T10:00:00").toDate(),
    end: moment("2024-06-12T13:00:00").toDate(),
    data: {
      blockout: {
        id: 1,
        name: "Independence Day",
      },
    },
  },
  {
    start: moment("2024-06-12T10:00:00").toDate(),
    end: moment("2024-06-17T13:00:00").toDate(),
    data: {
      appointment: {
        id: 3,
        title: "MA1522",
        description: "Linear Algebra",
        location: "LT27",
        resource: "Lecture",
      },
    },
    resourceId: 1,
  },
];
