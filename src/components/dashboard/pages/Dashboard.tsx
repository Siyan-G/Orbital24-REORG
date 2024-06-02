import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Feed from "../comp/Feed";


const Layout: React.FC = () => {
  return (
    // <Box sx={{display: 'flex'}}>
    //   <Sidebar />
    //   <Box sx={{flexGrow: 1}}>
    //     <Feed/>
    //   </Box>
     
    // </Box>
    <Grid 
      container
      direction="row"
      justifyContent="center"
      spacing={2}>
      <Grid item xs="auto">
        <Sidebar/>
      </Grid>
      <Grid item xs={4}>
        <Feed/> 
      </Grid>
    </Grid>
    
  );
};

export default Layout;
