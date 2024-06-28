import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Drawer, Box } from "@mui/material";
import REORGLogo from "../../assets/REORGLogo.svg"

const Sidebar: React.FC = () => {
  return (
      <Box flex={1} p={2} sx={{minWidth: '200px', maxWidth: '250px' }}>
        <List style={{position:'fixed'}}>
          <ListItem button component={Link} to="/MainCalendar">
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/main/courseplanning">
            <ListItemText primary="Course Planning" />
          </ListItem>
          <ListItem button component={Link} to="/main">
            <ListItemText primary="Modules" />
          </ListItem>
          <ListItem button component={Link} to="/main/usersettings">
            <ListItemText primary="User Settings" />
          </ListItem>
        </List>
      </Box>
  );
};

export default Sidebar;
