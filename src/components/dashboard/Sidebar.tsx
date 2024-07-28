import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Drawer, Box, ListItemIcon } from "@mui/material";
import REORGLogo from "../../assets/REORGLogo.svg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from "@mui/icons-material/Logout";
import Alert from "@mui/material/Alert";
import { useAuth } from "../context/AuthContext";


const Sidebar: React.FC = () => {

  const auth = useAuth();
  const handleLogout = () => {  
    auth.logout();
  }
  
  return (
    <Box flex={1} p={2} sx={{ minWidth: "200px", maxWidth: "250px" }}>
      <List style={{ position: "fixed" }}>
        <ListItem component={Link} to="/main/calendar">
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText
            primary="Calendar"
            primaryTypographyProps={{
              style: { fontWeight: 500, color: "#9395b2" },
            }}
          />
        </ListItem>
        <ListItem component={Link} to="/main/courseplanning">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Course Planning"
            primaryTypographyProps={{
              style: { fontWeight: 500, color: "#9395b2" },
            }}
          />
        </ListItem>
        <ListItem component={Link} to="/main">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText
            primary="Modules"
            primaryTypographyProps={{
              style: { fontWeight: 500, color: "#9395b2" },
            }}
          />
        </ListItem>
        <ListItem component={Link} to="/main/usersettings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="User Settings"
            primaryTypographyProps={{
              style: { fontWeight: 500, color: "#9395b2" },
            }}
          />
        </ListItem>
        <ListItem component={Link} to="/" onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log Out"
            primaryTypographyProps={{
              style: { fontWeight: 500, color: "#9395b2" },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
