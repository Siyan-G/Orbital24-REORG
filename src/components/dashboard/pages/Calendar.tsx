import React, { useEffect } from "react";
import { Box, Divider, Grid, Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Graph from "../comp/Graph";
import MainCalendar from "../comp/MainCalendar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' , width: '100vw'}}>
            
              <Topbar pageTitle="Calendar"/>
              
              <Box sx={{ flex: 1, display: 'flex'}}>
            <Stack 
              direction={'row'}  
              spacing={0}
              justifyContent={'flex-start'}
              sx={{ width: '100%', height: '100%' }}
              >
              <Sidebar/>
              <Divider orientation="vertical" flexItem />
              <MainCalendar/>
              
            </Stack>
            </Box>  
        </Box>
      );
}

export default Calendar
