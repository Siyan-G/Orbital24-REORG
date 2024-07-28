import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import "./index.css";

export default function AddEvent() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDateTime, setStartDateTime] = React.useState("");
  const [endDateTime, setEndDateTime] = React.useState("");
  const [eventType, setEventType] = React.useState("");

  const BASE_URL = "http://localhost:8080/api/calendar";

  async function handleAdd(e: any): Promise<void> {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      startDateTime,
      endDateTime,
      eventType,
    };
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    console.log(JSON.stringify(newEvent));
  }

  async function handleGet(e: any): Promise<void> {
    e.preventDefault();
  }

  function handleAddEvent() {
    console.log(open);
    setOpen(true);
  };
  const handleDiscard = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleAddEvent}>
        New Event
      </Button>
      <Dialog
        open={open}
        onClose={handleDiscard}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="new-event">{"Add New Event"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "28ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="event-title"
                label="Event Title"
                defaultValue=""
                fullWidth
                value={title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(event.target.value);
                }}
              />
              <TextField
                required
                id="event-type"
                label="Event Type"
                defaultValue=""
                value={eventType}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEventType(event.target.value);
                }}
              />
              <TextField
                required
                variant="standard"
                id="start-date"
                label="Event Start Date"
                type="datetime-local"
                defaultValue=""
                value={startDateTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStartDateTime(event.target.value);
                }}
              />
              <TextField
                required
                variant="standard"
                id="end"
                label="Event End Date and Time"
                type="datetime-local"
                defaultValue=""
                value={endDateTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEndDateTime(event.target.value);
                }}
              />
              <TextField
                multiline
                required
                id="event-descrption"
                label="Event Descrption"
                defaultValue=""
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDiscard}>Discard</Button>
          <Button onClick={handleAdd} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

