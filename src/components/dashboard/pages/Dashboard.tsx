import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import Feed from "../comp/Feed";
import Topbar from "../Topbar";


const DashBoard: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' , width: '100vw'}}>
        
          <Topbar />
          
          <Box sx={{ flex: 1, display: 'flex'}}>
        <Stack 
          direction={'row'}  
          spacing={1}
          justifyContent={'space-between'}
          sx={{ width: '100%', height: '100%' }}
          >
          <Sidebar/>
          <Feed/>
        </Stack>
        </Box>  
    </Box>
    
  );
};

export default DashBoard;
