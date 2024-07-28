import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const AccountSettings = () => {
  const auth = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [timeFormat, setTimeFormat] = useState('12h');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const email = localStorage.getItem("user");

  useEffect(() => {
    // Load user data from API if email is available
    const fetchUserData = async () => {
      if (email) {
        try {
          const response = await axios.get(`http://localhost:8181/api/user/${email}`);
          setUsername(response.data.username || "");
          // Note: Make sure not to display or handle password directly
          // For security reasons, don't set password from the API response
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    
    fetchUserData();
  }, [email]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8181/api/user/email/${email}`);
      auth.logout(); // Optionally, log out the user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleLogout = () => {
    auth.logout();
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8181/api/user/${email}`, {
        username,
        password
      });
      console.log('User updated successfully');
      auth.logout();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: "40%" }} justifyContent={"center"}>
      <Container>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="text" color="info" fullWidth onClick={handleUpdate}>
                Update Profile
              </Button>
            </Grid>
            <Grid item xs={12}>
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
