import { Divider, Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import AccountSettings from "../comp/SettingsMain";

const UserSettings: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' , width: '100vw'}}>
        
          <Topbar pageTitle="Course Overview"/>
          
          <Box sx={{ flex: 1, display: 'flex'}}>
        <Stack 
          direction={'row'}  
          spacing={1}
          justifyContent={'align left'}
          sx={{ width: '100%', height: '100%' }}
          >
          <Sidebar/>
          <Divider orientation="vertical" flexItem />
          <AccountSettings/>
        </Stack>
        </Box>  
    </Box>
  );
};

export default UserSettings;
