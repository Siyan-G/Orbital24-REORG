import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Switch,
  Select,
  MenuItem,
  FormControlLabel,
  Link,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useAuth } from '../../context/AuthContext';

const AccountSettings = () => {
  const auth = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [timeFormat, setTimeFormat] = useState('12h');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [Username, setUsername] = useState(auth.user?.username ?? "");
  const [Email, setEmail] = useState(auth.user?.email ?? "");

  const handleDelete = () => {
    // Delete the user account
  }

  const handleLogout = () => {
    // Logout the user
    auth.logout();
  }

  const handleUpdate = () => {
    // Update the user account
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: "40%" }} justifyContent={"center"}>
      <Container>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Account
          </Typography>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
            <Typography variant="subtitle1">Profile picture</Typography>
            <Button variant="outlined" size="small">
              Choose file
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              no file selected
            </Typography>
            <Typography variant="caption" color="textSecondary">
              maximum image size is 1 MB
            </Typography>
          </Grid> */}
            <Grid item xs={12}>
              <TextField fullWidth label="Username" value={Username} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                InputProps={{
                  readOnly: true,
                }}
                value={Email}
              />
              {/* <Typography variant="caption" color="error" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                InputProps={{
                  readOnly: true,
                }}
              >
                {Email}
                <TextField/>
              {/* <Typography variant="caption" color="error" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              Email not verified. <Link href="#" color="error" sx={{ ml: 1 }}>Verify now</Link>
            </Typography> */}
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                }
                label="Dark Mode"
              />
            </Grid>
             <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
              Time Format <InfoIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
            <Select
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="12h">12h (am/pm)</MenuItem>
              <MenuItem value="24h">24h</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
              Date Format <InfoIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
            <Select
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </Grid> */}
            <Grid item xs={12}>
              <Button variant="text" color="info" fullWidth onClick={handleUpdate}>
              Update Profile
            </Button>
            </Grid>
            <Grid item xs={12}>
              {/* <Button variant="text" color="primary" fullWidth>
              Logout
            </Button> */}
              <Link href="/" color="error" onClick={handleLogout}>
                Log Out
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button color="warning" onClick={handleDelete}>Delete my account</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default AccountSettings;