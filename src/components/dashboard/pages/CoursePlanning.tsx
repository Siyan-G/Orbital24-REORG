import { Feed } from "@mui/icons-material";
import { Divider, Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import OverViewPage from "../comp/OverViewPage";
import Graph from "../comp/Graph";

const CoursePlanning: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' , width: '100vw'}}>
        
          <Topbar pageTitle="Course Overview"/>
          
          <Box sx={{ flex: 1, display: 'flex'}}>
        <Stack 
          direction={'row'}  
          spacing={1}
          justifyContent={'space-between'}
          sx={{ width: '100%', height: '100%' }}
          >
          <Sidebar/>
          <Divider orientation="vertical" flexItem />
          <OverViewPage/>
          <Divider orientation="vertical" flexItem />
          <Graph/>
        </Stack>
        </Box>  
    </Box>
  );
};

export default CoursePlanning;
