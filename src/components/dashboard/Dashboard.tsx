import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";


const Layout: React.FC = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={3}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
