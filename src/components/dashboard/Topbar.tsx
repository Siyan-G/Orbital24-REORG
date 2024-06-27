import { AppBar,  Avatar,  Button,  IconButton,  InputBase, Toolbar, styled, Box, Menu, MenuItem } from "@mui/material"
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';
import { useState } from "react";
import REORGLogo from "../../assets/REORGLogo.svg"
import { Link } from "react-router-dom";


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const SearchBar = styled(Box)(() => ({
  backgroundColor: "white",
  padding:"5px 10px",
  borderRadius: "5px",
  width: "40%"
}))

const Topbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="/">
          <Button variant='text' size='large' sx={{display:{xs:"none", sm:"block"}}}> 
          <img className="logo" src={REORGLogo} alt="REORG Icon" />
          </Button>
        </Link>
        <Link to="/">
          <IconButton>
            <NoiseControlOffIcon sx={{display:{xs:"block", sm:"none"}}}/>
          </IconButton>
        </Link>
        
    
        <SearchBar color={"white"}><InputBase placeholder="Search"/></SearchBar>
        <Avatar onClick={() => setOpen(true)} />
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={()=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to='/userPage'>
          <MenuItem>Profile</MenuItem>
        </Link>
        
        <MenuItem>Logout</MenuItem>

      </Menu>

    </AppBar>
  )
}

export default Topbar  