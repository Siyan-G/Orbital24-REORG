import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Drawer, Box } from "@mui/material";
import REORGLogo from "../../assets/REORGLogo.svg"

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{width:100}}>
      <Box width={250}>
        <List>
          <img className="logo" src={REORGLogo} alt="REORG Icon" />
          <ListItem button component={Link} to="/">
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/main/courseplanning">
            <ListItemText primary="Course Planning" />
          </ListItem>
          <ListItem button component={Link} to="/main/modules">
            <ListItemText primary="Modules" />
          </ListItem>
          <ListItem button component={Link} to="/main/usersettings">
            <ListItemText primary="User Settings" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
