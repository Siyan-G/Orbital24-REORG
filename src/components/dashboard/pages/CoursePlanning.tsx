import { Feed } from "@mui/icons-material";
import { Divider, Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import OverViewPage from "../comp/OverViewPage";
import Graph from "../comp/Graph";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const CoursePlanning: React.FC = () => {
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
          justifyContent={'flex-start'}
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
