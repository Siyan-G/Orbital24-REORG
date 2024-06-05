import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import Feed from "../comp/Feed";
import Topbar from "../Topbar";


const DashBoard: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2} direction={'column'}>
        <Grid item xs={2}>
          <Topbar />
        </Grid>
        <Grid item xs={6}>
        <Stack 
          direction={'row'}  
          spacing={1} 
          justifyContent={'space-between'}
          sx={{ width: '100%', margin: 0 }}
          >
          <Sidebar/>
          <Feed/>
        </Stack>
        </Grid>
        </Grid> 
    </Box>
    
  );
};

export default DashBoard;
