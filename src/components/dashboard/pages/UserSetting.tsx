import { Divider, Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import AccountSettings from "../comp/SettingsMain";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserSettings: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

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
          <Box width={'15%'}/>
          <AccountSettings/>
        </Stack>
        </Box>  
    </Box>
  );
};

export default UserSettings;
