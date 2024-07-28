import React from "react";
import { Box, Divider, Grid, Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import Feed from "../comp/Feed";
import Topbar from "../Topbar";
import JournalPage from "../comp/Journal";


const Journal: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' , width: '100vw'}}>
        
          <Topbar pageTitle="Course Search"/>
          
          <Box sx={{ flex: 1, display: 'flex'}}>
        <Stack 
          direction={'row'}  
          spacing={1}
          justifyContent={'flex start'}
          sx={{ width: '100%', height: '100%' }}
          >
          <Sidebar/>
          <Divider orientation="vertical" flexItem />
          <JournalPage/>
        </Stack>
        </Box>  
    </Box>
    
  );
};

export default Journal;
