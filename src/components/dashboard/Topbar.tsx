import { AppBar,  Avatar,  Button,  IconButton,  InputBase, Toolbar, styled, Box, Menu, MenuItem, useScrollTrigger, Typography, Stack } from "@mui/material"
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';
import { useState } from "react";
import REORGLogo from "../../assets/REORGLogo.svg"
import { Link } from "react-router-dom";
import React from "react";
import { TypeH1 } from "react-bootstrap-icons";


interface TopbarProps {
  pageTitle: string;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.text.primary, // This will set the text color to the default dark color
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
});

const LogoButton = styled(Button)({
  padding: 0,
  '& img': {
    height: 40,
    marginRight: 16,
  },
});


const Topbar: React.FC<TopbarProps> = ({ pageTitle }) => {
  return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <Stack
            justifyContent={'flex start'}
            direction={'row'}
            spacing={{xs: 15}}>
          <Box>
          <Link to="/">
            <LogoButton>
              <img src={REORGLogo} alt="REORG Icon" />
            </LogoButton>
          </Link>
          </Box>
          {/* <Box>
          <Typography variant="h5" component="h1" fontWeight={'Medium'}>
            {pageTitle}
          </Typography>
          </Box> */}
          {/* <div style={{ width: 40 }} /> Spacer to balance the layout */}
          </Stack>
        </StyledToolbar>
      </StyledAppBar>
  );
};

export default Topbar  